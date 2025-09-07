import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router'

import Layout from '../Layout'

vi.mock('@presentation/hooks/api/useCharacters', () => ({
  useCharacters: () => ({ items: [], total: 0, refetch: vi.fn() }),
}))

vi.mock('@presentation/hooks/contexts/useFavorites', () => ({
  useFavorites: () => ({ listFavorites: [], isFavorite: vi.fn() }),
}))

vi.mock('@presentation/hooks/pagination/usePagination', () => ({
  usePagination: () => ({
    page: 1,
    totalPages: 1,
    hasPrev: false,
    hasNext: false,
    nextPage: vi.fn(),
    prevPage: vi.fn(),
  }),
}))

vi.mock('@presentation/components/organisms/search-bar', () => ({
  default: () => <input placeholder='Search or filter results' />,
}))

vi.mock('@presentation/components/organisms/characters-list', () => ({
  default: () => <div>CharacterList</div>,
}))

vi.mock('@presentation/components/molecules/pagination', () => ({
  default: () => <div>Pagination</div>,
}))

vi.mock('@presentation/components/molecules/back-button', () => ({
  default: ({ label, onClick }: { label?: string; onClick?: () => void }) => (
    <button onClick={onClick}>{label ?? 'Atrás'}</button>
  ),
}))

describe('Layout', () => {
  test('should render Layout correctly (index route)', () => {
    render(
      <MemoryRouter initialEntries={['/select-character']}>
        <Routes>
          <Route path='/select-character' element={<Layout />}>
            {/* Contenido que va al <Outlet /> cuando NO es detalle */}
            <Route index element={<p>Detail content</p>} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    const root = screen.getByTestId('main-layout')
    expect(screen.getByText('Rick and Morty list')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Search or filter results')
    ).toBeInTheDocument()
    expect(screen.getByText('Detail content')).toBeInTheDocument()
    expect(screen.getByLabelText('detail-panel')).toBeInTheDocument()
    expect(root).toHaveClass('font-greycliff')
  })

  test('should show BackButton on detail route (mobile state)', () => {
    render(
      <MemoryRouter initialEntries={['/select-character/42']}>
        <Routes>
          <Route path='/select-character' element={<Layout />}>
            <Route path=':id' element={<p>Detail content</p>} />
          </Route>
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByText('Atras')).toBeInTheDocument()
    expect(screen.getByText('Detail content')).toBeInTheDocument()
  })
})
