'use client'
import React, { useState } from 'react'

export default function HomePage() {
  let [Count, setCount] = useState(0)

  const increment = () => {
    setCount(Count + 1)
  }
  const decrement = () => {
    setCount(Count - 1)
    if (Count == 0) {
      setCount(Count = 0)
    }

  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 >...Counter...</h1>
      <h1>{Count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decerment</button>
    </div>
  )
}
