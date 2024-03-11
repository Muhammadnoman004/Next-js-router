'use client'
import React, { useState } from 'react'
import './Counter.css'

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
    <div>
      <h1 id='heading'>...Counter...</h1>
      <h1 id='Count'>{Count}</h1>
      <button id='incBtn' onClick={increment}>Increment</button>
      <button id='decBtn' onClick={decrement}>Decrement</button>
    </div>
  )
}
