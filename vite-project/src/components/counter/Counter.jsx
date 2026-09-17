import React, { useState } from 'react'
import Button from '../button/Button'

const Counter = () => {
  const [count,setcount]=useState(0)
  return (
    <div>
        <h1>Counter is {count}</h1>
        <Button title="Increment" onClick={()=>setcount(count+1)} />
        <Button title="Decrement" onClick={()=>setcount(count-1)} />
    </div>
  )
}

export default Counter

