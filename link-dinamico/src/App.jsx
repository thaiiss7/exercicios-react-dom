import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Users } from './pages/Users'
import { UserPage } from './pages/UserPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/userlist' element={<Users/>}></Route>
          <Route path='/userlist/:id' element={<UserPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
