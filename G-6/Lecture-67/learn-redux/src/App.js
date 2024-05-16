import React from 'react'
import { increment } from './action';
import { useSelector,useDispatch} from 'react-redux';
const App = () => {

  const count=useSelector(state=> state.count);

  const dispatch=useDispatch();

  function Handler()
  {
    dispatch(increment())
  }
  return (
    <div>
      <h1> count : {count}</h1>
      <button onClick={Handler}>increment</button>
    </div>
  )
}

export default App