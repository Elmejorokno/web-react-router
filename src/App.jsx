import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="App container">
        <Outlet />
      </div>
    </>
  )
}

export default App
