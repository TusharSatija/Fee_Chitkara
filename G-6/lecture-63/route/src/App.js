import React, { createContext } from 'react'
import CompA from './Component/CompA';
const Data=createContext()
const App = () => {
  return (
    <div>
      <Data.Provider  value={"Secret data"} >
        <CompA/>
      </Data.Provider>
    </div>
  )
}

export default App
export {Data} ;