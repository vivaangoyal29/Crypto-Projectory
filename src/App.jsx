import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import COin from './pages/Coin/COin.jsx'
import Footer from './components/footer/footer'
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/coin/:coinId' element={<COin />}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
