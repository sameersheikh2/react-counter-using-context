import React , {useContext} from 'react'
import { CounterContext } from '../context.js/CounterContext'

function ComponentB() {

    const { count , increment, decrement } = useContext(CounterContext)

  return (
    <div>
        <h2>Counter</h2>
        <p>{count}</p>
        <button onClick={increment} >Increase</button>
        <button onClick={decrement} >Decrease</button>
    </div>
  )
}

export default ComponentB;