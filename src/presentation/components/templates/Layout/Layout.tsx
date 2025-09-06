import type { LayoutProps } from './layout-type'
import SearchBar from '@presentation/components/organisms/search-bar'

const Layout = ({ children }: LayoutProps) => (
  <div
    className='min-h-dvh bg-white text-neutral-900 font-greycliff'
    data-testid='main-layout'
  >
    <div className='min-h-dvh md:grid md:grid-cols-[320px_1fr] bg-white'>
      {/* Sidebar */}
      <aside className='flex flex-col border-r border-neutral-200 md:bg-[#fcfcfc] min-h-dvh'>
        <div className='px-6 py-5 border-b md:bg-[#fcfcfc] border-neutral-100'>
          <div className='pb-4 px-2'>
            <h1 className='font-semibold text-2xl'>Rick and Morty list</h1>
          </div>
          <SearchBar />
        </div>
        <div className='flex-1 overflow-y-auto'>
          <div className='p-6 text-sm text-neutral-500'>Sidebar content</div>
        </div>
      </aside>
      {/* Main Content */}
      <main className='hidden md:block min-h-dvh' aria-label='detail-panel'>
        <div className='h-full overflow-y-auto'>
          <div className='px-8 lg:px-16 py-8'>{children}</div>
        </div>
      </main>
    </div>
  </div>
)

export default Layout
