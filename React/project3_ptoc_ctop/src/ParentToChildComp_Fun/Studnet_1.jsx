import React from 'react'
import { useState } from 'react'
import Student_Child_1 from './Student_Child_1'

const Studnet_1 = () => {
    const [studentInfo, setstudentInfo] = useState([])
    const reciveDataFromchild=(studentDetails)=>{
        setstudentInfo(studentDetails)
    }
  return (
    <div>
        <h2>Student Details from Child</h2>
        <Student_Child_1 getData={reciveDataFromchild}/>        
        <ul>
            {studentInfo.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
  )
}

export default Studnet_1