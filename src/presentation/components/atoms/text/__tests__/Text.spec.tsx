import { expect, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Text from '../Text'
import { SIZE_MAP, WEIGHT_MAP } from '@presentation/constants/class-map'

describe('Text', () => {
  test('should render with default props and the correct classes', () => {
    const textContent = 'Hello World'
    render(<Text>{textContent}</Text>)

    const element = screen.getByText(textContent)
    expect(element).toBeInTheDocument()
    expect(element.tagName).toBe('P')
    expect(element).toHaveClass(SIZE_MAP.m)
    expect(element).toHaveClass(WEIGHT_MAP.normal)
  })

  test('should apply the correct class for different sizes', () => {
    const textContent = 'Small Text'
    render(<Text size='s'>{textContent}</Text>)

    const element = screen.getByText(textContent)
    expect(element).toHaveClass(SIZE_MAP.s)
  })

  test('should apply the correct class for different weights', () => {
    const textContent = 'Bold Text'
    render(<Text weight='bold'>{textContent}</Text>)

    const element = screen.getByText(textContent)
    expect(element).toHaveClass(WEIGHT_MAP.bold)
  })

  test('should render with a span tag when specified', () => {
    const textContent = 'Inline Text'
    render(<Text tag='span'>{textContent}</Text>)

    const element = screen.getByText(textContent)
    expect(element.tagName).toBe('SPAN')
    expect(element).toBeInTheDocument()
  })

  test('should apply a custom className', () => {
    const textContent = 'Custom Class Text'
    const customClass = 'text-blue-500'
    render(<Text className={customClass}>{textContent}</Text>)

    const element = screen.getByText(textContent)
    expect(element).toHaveClass(customClass)
  })

  test('should combine all props correctly', () => {
    const textContent = 'Combined Props Text'
    const customClass = 'italic'
    render(
      <Text tag='span' size='l' weight='semibold' className={customClass}>
        {textContent}
      </Text>
    )

    const element = screen.getByText(textContent)
    expect(element.tagName).toBe('SPAN')
    expect(element).toHaveClass(SIZE_MAP.l)
    expect(element).toHaveClass(WEIGHT_MAP.semibold)
    expect(element).toHaveClass(customClass)
    expect(element.classList.length).toBe(3)
  })
})
