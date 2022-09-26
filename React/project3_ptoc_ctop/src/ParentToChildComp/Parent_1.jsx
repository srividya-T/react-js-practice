import React from 'react'
import { useState } from 'react'
import Child_1 from './Child_1'

const Parent_1 = () => {
    const [person, setperson] = useState({fname:"Red",lname:"Colour"})
  return (
    <div>
        <Child_1 personDetails={person}/>
    </div>
  )
}

export default Parent_1