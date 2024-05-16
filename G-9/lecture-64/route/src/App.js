import React from 'react'
import {Routes ,Route, Link} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Product from './component/Product';
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Product'>Product</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='/product' element={<Product/>}></Route>
      </Routes>

    </div>
  )
}

export default App