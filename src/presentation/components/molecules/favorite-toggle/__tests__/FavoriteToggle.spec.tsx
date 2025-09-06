import { describe, test, expect, vi } from 'vitest'
import { render, fireEvent, screen } from '@testing-library/react'

import FavoriteToggle from '../FavoriteToggle'

describe('FavoriteToggle', () => {
  test('should show a button with an outlined heart when inactive', () => {
    render(<FavoriteToggle active={false} />)

    const button = screen.getByRole('button', { name: 'Add to favorites' })
    const heartIcon = screen.getByRole('img', { hidden: true })

    expect(button).toHaveAttribute('aria-pressed', 'false')
    expect(heartIcon).toHaveClass('text-neutral-300')
  })

  test('should show a button with a filled heart when active', () => {
    render(<FavoriteToggle active />)

    const heartIcon = screen.getByRole('img', { hidden: true })
    const button = screen.getByRole('button', { name: 'Remove from favorites' })

    expect(button).toHaveAttribute('aria-pressed', 'true')
    expect(heartIcon).toHaveClass('text-secondary-600')
  })

  test('should call onToggle on click and stop propagation', () => {
    const onToggle = vi.fn()
    const onParentClick = vi.fn()

    render(
      <div onClick={onParentClick}>
        <FavoriteToggle active={false} onToggle={onToggle} />
      </div>
    )

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onParentClick).not.toHaveBeenCalled()
  })
})
