import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'

import InfoRow from '../InfoRow'
import type { TextProps } from '@presentation/components/atoms/text/text-type'

// Mock the component Text to isolate the test.
vi.mock('@presentation/components/atoms/text', () => ({
  default: ({ children, className }: TextProps) => (
    <span className={className}>{children}</span>
  ),
}))

describe('InfoRow', () => {
  test('should render the label and value correctly', () => {
    render(<InfoRow label='Species' value='Human' isLast={false} />)

    expect(screen.getByText('Species')).toBeInTheDocument()
    expect(screen.getByText('Human')).toBeInTheDocument()
  })

  test('should render "NA" when value is empty', () => {
    render(<InfoRow label='Species' value='' isLast={false} />)

    expect(screen.getByText('Species')).toBeInTheDocument()
    expect(screen.getByText('NA')).toBeInTheDocument()
  })

  test('should not have a bottom border when it is the last item', () => {
    render(<InfoRow label='Species' value='Human' isLast={true} />)

    const container = screen.getByText('Species').closest('div')

    expect(container).not.toHaveClass('border-b')
  })

  test('should have a bottom border when it is not the last item', () => {
    render(<InfoRow label='Species' value='Human' isLast={false} />)

    const container = screen.getByText('Species').closest('div')

    expect(container).toHaveClass('border-b')
  })
})
