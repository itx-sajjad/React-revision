import React, { useState } from 'react'
import Button from '../button/Button'

const Counter =()=>{
  const [count,setCount]=useState(0)


    return (
        <div>
            <h1>Counter is {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}
export default Counter

