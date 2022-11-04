import React from 'react'
import { useSelector } from 'react-redux'

export const TestComponent = () => {
    const count = useSelector((state)=>state.count)
  return (
    <div>
        <h2>Count Value In Test Component is : {count}</h2>
    </div>
  )
}
