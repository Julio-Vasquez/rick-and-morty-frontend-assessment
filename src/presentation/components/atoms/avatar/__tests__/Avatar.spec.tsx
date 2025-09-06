import { describe, test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import Avatar from '../Avatar'

describe('Avatar', () => {
  test('should render with correct alt text for accessibility', () => {
    const altText = 'User Profile Picture'

    render(<Avatar src='/test-avatar.jpg' alt={altText} />)

    const avatar = screen.getByRole('img', { name: altText })

    expect(avatar).toBeInTheDocument()
  })

  test('should render with the correct size', () => {
    const customSize = 80

    render(<Avatar src='/test-avatar.jpg' alt='user avatar' size={customSize} />)

    const avatar = screen.getByRole('img', { name: 'user avatar' })

    expect(avatar).toHaveAttribute('width', customSize.toString())
    expect(avatar).toHaveAttribute('height', customSize.toString())
    expect(avatar).toHaveClass(`h-[${customSize}px]`)
  })

  test('should apply the correct CSS classes', () => {
    render(<Avatar src='/test-avatar.jpg' alt='user avatar' />)

    const avatar = screen.getByRole('img', { name: 'user avatar' })

    expect(avatar).toHaveClass('rounded-full', 'object-cover')
  })

  test('should add custom classes', () => {
    const customClass = 'border-4 border-blue-500'

    render(
      <Avatar src='/test-avatar.jpg' alt='user avatar' className={customClass} />
    )

    const avatar = screen.getByRole('img', { name: 'user avatar' })

    expect(avatar).toHaveClass('rounded-full', 'object-cover', customClass)
  })
})
