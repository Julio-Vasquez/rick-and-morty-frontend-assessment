const Home = () => {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='rounded-2xl bg-white/90 p-8 text-center shadow-lg'>
        <h1 className='text-3xl font-bold text-gray-900'>🚀 Bienvenido</h1>
        <p className='mt-4 text-lg text-gray-700'>
          Has llegado a la{' '}
          <span className='font-semibold text-purple-700'>
            API de Rick and Morty
          </span>
          .
        </p>
        <p className='mt-2 text-gray-600'>
          Explora personajes, ubicaciones y episodios de esta gran serie
          interdimensional 🛸.
        </p>
      </div>
    </div>
  )
}

export default Home
