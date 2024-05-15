import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Product from './Component/Product'

const App1 = () => {
  return ( 
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/product'>product</Link></li>
                </ul>
            </nav>
        <Routes>
            <Route path='/'  element={<Home/>}></Route>
            <Route path='/About'  element={<About/>}>
            </Route>
            <Route path='/product' element={<Product/>}></Route>
        </Routes>
    </div>
  )
}

export default App1