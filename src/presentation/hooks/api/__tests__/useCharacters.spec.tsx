import { describe, test, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'

import { useCharacters } from '../useCharacters'
import { characters } from '@presentation/constants/tests-mock'
import type { CharacterList } from '@domain/types/character-list-params'

// --- Mocks ---
const getCharactersMock = vi.fn()

vi.mock('@presentation/hooks/contexts/useServices', () => ({
  useServices: () => ({ getCharacters: getCharactersMock }),
}))

const state: CharacterList = {
  items: [],
  count: 0,
  pages: 0,
  next: null,
  prev: null,
}
// --- Test Component ---
const Example = () => {
  const { items, total, loading, error, refetch } = useCharacters()

  return (
    <div>
      <div data-testid='loading'>{String(loading)}</div>
      <div data-testid='error'>{String(Boolean(error))}</div>
      <div data-testid='count'>{items.length}</div>
      <div data-testid='total'>{total}</div>

      <button onClick={() => refetch({ page: 1, name: 'rick' })}>fetch</button>
      <button onClick={() => refetch()}>fetch-empty</button>
    </div>
  )
}

describe('useCharacters hook', () => {
  beforeEach(() => {
    getCharactersMock.mockReset()
  })

  test('should fetch data automatically on mount with default parameters', async () => {
    // Auto-fetch OK
    getCharactersMock.mockResolvedValueOnce(state)

    render(<Example />)

    expect(screen.getByTestId('loading').textContent).toBe('true')

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(getCharactersMock).toHaveBeenCalledTimes(1)
    expect(getCharactersMock).toHaveBeenLastCalledWith({})

    expect(screen.getByTestId('count').textContent).toBe('0')
    expect(screen.getByTestId('total').textContent).toBe('0')
    expect(screen.getByTestId('error').textContent).toBe('false')
  })

  test('should fetch and update state when refetch is called with parameters', async () => {
    // Auto-fetch + manual
    getCharactersMock.mockResolvedValueOnce(state).mockResolvedValueOnce({
      items: [characters.rick],
      count: 123,
      pages: 7,
      next: 2,
      prev: 1,
    } as CharacterList)

    render(<Example />)

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    fireEvent.click(screen.getByText('fetch'))

    expect(screen.getByTestId('loading').textContent).toBe('true')

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(getCharactersMock).toHaveBeenCalledTimes(2)
    expect(getCharactersMock).toHaveBeenLastCalledWith({ page: 1, name: 'rick' })

    expect(screen.getByTestId('count').textContent).toBe('1')
    expect(screen.getByTestId('total').textContent).toBe('123')
    expect(screen.getByTestId('error').textContent).toBe('false')
  })

  test('should handle API errors and set the error state', async () => {
    getCharactersMock
      .mockResolvedValueOnce(state)
      .mockRejectedValueOnce(new Error('API error'))

    render(<Example />)

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    fireEvent.click(screen.getByText('fetch'))

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(screen.getByTestId('error').textContent).toBe('true')
    expect(screen.getByTestId('count').textContent).toBe('0')
    expect(screen.getByTestId('total').textContent).toBe('0')
  })

  test('should recover from an error on a subsequent successful fetch', async () => {
    getCharactersMock
      .mockResolvedValueOnce(state)
      .mockRejectedValueOnce(new Error('boom'))
      .mockResolvedValueOnce({
        items: [characters.rick],
        count: 1,
        pages: 1,
        next: null,
        prev: null,
      } as CharacterList)

    render(<Example />)

    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    fireEvent.click(screen.getByText('fetch'))
    await waitFor(() => expect(screen.getByTestId('error').textContent).toBe('true'))

    fireEvent.click(screen.getByText('fetch-empty'))
    await waitFor(() =>
      expect(screen.getByTestId('loading').textContent).toBe('false')
    )

    expect(screen.getByTestId('error').textContent).toBe('false')
    expect(screen.getByTestId('count').textContent).toBe('1')
    expect(screen.getByTestId('total').textContent).toBe('1')
  })
})
