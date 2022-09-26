import React from 'react'
import { useState } from 'react'
import Child_2 from './Child_2'

const Parent_2 = () => {
    const [personInfo, setpersonInfo] = useState([])
    const reciveDataFomChild = (personDetails)=>{
        setpersonInfo(personDetails)
    }
  return (
    <div>
        <Child_2 getData={reciveDataFomChild}/>
        <p>Student Details from Child</p>
        <ul>
            {personInfo.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
  )
}

export default Parent_2