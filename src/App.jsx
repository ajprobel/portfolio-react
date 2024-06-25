import { Outlet } from 'react-router-dom';
import Nav from './components/Nav'

import './App.css'

function App() {

  return (
    <>
      <Nav />
      <main className="m-3">
        <Outlet />
      </main>
    </>
  )
}

export default App
