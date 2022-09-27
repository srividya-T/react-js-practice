import React from 'react'
import { useState } from 'react'
import Child_3 from './Child_3'

const Parent_3 = () => {
    const [studentInfo, setStudentInfo] = useState([]);
    const reciveDataFomChild = (studentDetails)=>{
        setStudentInfo(studentDetails)
    }
  return (
    <div>
        <Child_3 getData={reciveDataFomChild}/>
        <p>Student Details From Child</p>
        <ul>
            {studentInfo.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
  )
}

export default Parent_3