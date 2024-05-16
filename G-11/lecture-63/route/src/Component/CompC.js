import React from 'react'
import { Data } from '../App'
const CompC = () => {
  return (
    <div>
        <Data.Consumer>
           { (data)=>{
               return <h1>This is {data}</h1>
            }}
        </Data.Consumer>
    </div>
  )
}

export default CompC