import { Outlet } from 'react-router-dom'

function App() {
  return(
    <div className='bg-gradient-to-t bg-neutral-50'>
      <div className='flex flex-col justify-between items-center max-w-md mx-auto min-h-screen p-4 bg-stone-900'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
