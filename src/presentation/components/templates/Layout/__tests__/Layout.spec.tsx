import { expect, describe, test } from 'vitest'
import { render, screen } from '@testing-library/react'

import Layout from '../Layout'

describe('Layout', () => {
  test('should render children correctly', () => {
    render(
      <Layout>
        <p>Detail content</p>
      </Layout>
    )

    expect(screen.getByText('Rick and Morty list')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument()
    expect(screen.getByText('Detail content')).toBeInTheDocument()
    expect(screen.getByLabelText('detail-panel')).toBeInTheDocument()
  })
})
