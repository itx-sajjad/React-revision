import React, { useState } from 'react'
import Button from '../button/Button'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter is {count}</h1>
            <Button title='Increment' onClick={() => setCount(count + 1)} />
            <Button title='Decrement' onClick={() => setCount(count - 1)} />
        </div>
    )
}

export default Counter

import React from 'react'

export const Counter = () => {
  return (
    <div>Counter</div>
  )
}
