import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Features from './pages/Features/Features';
import Footer from './components/footer/Footer'
import Coin from './pages/Coin/Coin'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coin/:coinId' element={<Coin />}/>
        <Route path='/features' element={<Features />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
