import type { LayoutProps } from './layout-type'

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-900">
      <div className="mx-auto min-h-dvh md:grid md:grid-cols-[320px_1fr] xl:max-w-7xl bg-white">
        {/* Sidebar */}
        <aside className="flex flex-col border-r border-neutral-200 bg-white md:bg-[#fcfcfc] min-h-dvh">
          <div className="px-6 py-5 border-b border-neutral-100">
            <h1 className="text-lg font-semibold">Rick and Morty list</h1>
            <input placeholder="Buscar" />
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 text-sm text-neutral-500">Sidebar content</div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="hidden md:block min-h-dvh" aria-label="detail-panel">
          <div className="h-full overflow-y-auto">
            <div className="px-8 lg:px-16 py-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
