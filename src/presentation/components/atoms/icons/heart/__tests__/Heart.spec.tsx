import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Heart from '../Heart'

describe('Heart icon (single SVG)', () => {
  test('should be outlined by default', () => {
    render(<Heart />)
    const heartIcon = screen.getByRole('img', { hidden: true })
    expect(heartIcon).toHaveClass('text-neutral-300')
  })

  test('should be filled when `filled` prop is true', () => {
    render(<Heart filled />)
    const heartIcon = screen.getByRole('img', { hidden: true })
    expect(heartIcon).toHaveClass('text-secondary-600')
  })

  test('should support title for accessibility', () => {
    render(<Heart title="favorite" />)
    expect(screen.getByTitle('favorite')).toBeInTheDocument()
  })

  test('should be hidden from accessibility tree when no title is provided', () => {
    render(<Heart />)
    const heartIcon = screen.getByRole('img', { hidden: true })
    expect(heartIcon).toHaveAttribute('aria-hidden', 'true')
  })
})
