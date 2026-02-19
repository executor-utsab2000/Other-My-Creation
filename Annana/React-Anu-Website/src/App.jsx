import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Sections/Home'
import About from './Sections/About'
import Navbar from './Components/Fixed/Navbar'
import WhoIsShe from './Sections/WhoIsShe'
import DedicatedPoems from './Sections/DedicatedPoems'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/about'} element={<About />} />
          <Route path={'/who-is-she'} element={<WhoIsShe />} />
          <Route path={'/dedicated-poems'} element={<DedicatedPoems />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App