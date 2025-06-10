import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Sections/Home'
import Navbar from './Components/Fixed/Navbar'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/'} element={<Home />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App