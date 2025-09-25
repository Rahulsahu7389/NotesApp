import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/paste'
import ViewPaste from './components/ViewPaste'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pastes' element={<Paste />} />
        <Route path='/pastes/:id' element={<ViewPaste />} />
      </Routes>
    </>
  )
}

export default App
