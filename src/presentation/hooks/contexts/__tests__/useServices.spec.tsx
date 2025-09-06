import { describe, test, expect, vi } from 'vitest'
import { renderHook } from '@testing-library/react'

import { useServices } from '@presentation/hooks/contexts/useServices'
import { ServicesContext, type Services } from '@presentation/context/service'

/**
 * Helper: build a typed Services stub without pulling real implementations.
 */
const makeServicesStub = (): Services => ({
  // Cast function mocks to the exact Services function types
  getCharacters: vi.fn() as unknown as Services['getCharacters'],
  getCharacterById: vi.fn() as unknown as Services['getCharacterById'],
})

describe('useServices', () => {
  test('should throw when used outside ServicesProvider', () => {
    // When no provider is present, the hook must throw a clear error
    expect(() => renderHook(() => useServices())).toThrowError(
      /ServicesContext not found/i
    )
  })

  test('should return services object from context when wrapped by provider', () => {
    const services = makeServicesStub()

    // Wrapper provides the ServicesContext value for the hook under test
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ServicesContext.Provider value={services}>
        {children}
      </ServicesContext.Provider>
    )

    const { result } = renderHook(() => useServices(), { wrapper })

    // The hook should return exactly the same reference we provided
    expect(result.current).toBe(services)
  })
})
