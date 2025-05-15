import React from 'react'
import TestComp from './TestComp'
const Mango=()=>{
    return(
        <h2>This is Mango component</h2>
    )
}
const Graps=()=>{
    return(
        <h2>This is Graps component</h2>
    )
}
function Example() {
  return (
    <div>
      Nested Component
      <Mango />
      <Graps />
      <TestComp />
    </div>
  )
}

export default Example
