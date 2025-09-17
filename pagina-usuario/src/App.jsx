import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
      <BrowserRouter>
        <nav>
          <Link to={'/'}>Home </Link>
          <Link to={'/about'}>Sobre</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/profile/:nome' element={<Profile/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
