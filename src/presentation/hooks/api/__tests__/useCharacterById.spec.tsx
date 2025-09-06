import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { useCharacterById } from '../useCharacterById'
import { characters } from '@presentation/constants/tests-mock'

// Mock DI: useServices → getCharacterById
const getCharacterByIdMock = vi.fn()
vi.mock('@presentation/hooks/contexts/useServices', () => ({
  useServices: () => ({ getCharacterById: getCharacterByIdMock }),
}))

// Test-only component to drive the hook
const Example = () => {
  const { item, loading, error, fetchById } = useCharacterById()
  return (
    <div>
      <div data-testid='loading'>{String(loading)}</div>
      <div data-testid='error'>{String(Boolean(error))}</div>
      <div data-testid='name'>{item?.name ?? ''}</div>
      <button onClick={() => fetchById('1')}>fetch-1</button>
      <button onClick={() => fetchById('2')}>fetch-2</button>
      <button onClick={() => fetchById('')}>fetch-empty</button>
    </div>
  )
}

describe('useCharacterById (simplified)', () => {
  beforeEach(() => {
    getCharacterByIdMock.mockReset()
  })

  test('should start empty and not loading', () => {
    render(<Example />)
    expect(screen.getByTestId('loading').textContent).toBe('false')
    expect(screen.getByTestId('error').textContent).toBe('false')
    expect(screen.getByTestId('name').textContent).toBe('')
  })

  test('should fetch by id and set item', async () => {
    getCharacterByIdMock.mockResolvedValueOnce(characters.rick)

    render(<Example />)
    fireEvent.click(screen.getByText('fetch-1'))

    // loading during request
    expect(screen.getByTestId('loading').textContent).toBe('true')

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(getCharacterByIdMock).toHaveBeenCalledWith('1')
    expect(screen.getByTestId('name').textContent).toBe('Rick')
    expect(screen.getByTestId('error').textContent).toBe('false')
  })

  test('should update item when refetch is called with another id', async () => {
    getCharacterByIdMock
      .mockResolvedValueOnce(characters.rick) // first call (id=1)
      .mockResolvedValueOnce(characters.morty) // second call (id=2)

    render(<Example />)

    fireEvent.click(screen.getByText('fetch-1'))
    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )
    expect(screen.getByTestId('name').textContent).toBe('Rick')

    fireEvent.click(screen.getByText('fetch-2'))
    expect(screen.getByTestId('loading').textContent).toBe('true')

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(getCharacterByIdMock).toHaveBeenCalledTimes(2)
    expect(getCharacterByIdMock).toHaveBeenLastCalledWith('2')
    expect(screen.getByTestId('name').textContent).toBe('Morty')
  })

  test('should no-op when id is empty', async () => {
    render(<Example />)
    fireEvent.click(screen.getByText('fetch-empty'))

    expect(getCharacterByIdMock).not.toHaveBeenCalled()
    expect(screen.getByTestId('loading').textContent).toBe('false')
    expect(screen.getByTestId('error').textContent).toBe('false')
    expect(screen.getByTestId('name').textContent).toBe('')
  })

  test('should handle errors and stop loading', async () => {
    getCharacterByIdMock.mockRejectedValueOnce(new Error('boom'))

    render(<Example />)
    fireEvent.click(screen.getByText('fetch-1'))

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(screen.getByTestId('error').textContent).toBe('true')
    expect(screen.getByTestId('name').textContent).toBe('')
  })
})
