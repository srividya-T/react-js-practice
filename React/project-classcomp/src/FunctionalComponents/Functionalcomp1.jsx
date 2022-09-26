import React, { useState } from 'react'

export const Functionalcomp1 = () => {
    const [myName, setmyName] = useState("Vasu")
    const [person, setperson] = useState({
        lname:"Srinivas",
        fname:"Vidya"
    })
    const [users, setusers] = useState(["lg","Oneplus","Samsung"])
  return (
    <div>
        <button onClick={()=>{setmyName("Vidya")}}>Display my Name</button>
        <h2>Change my Name: {myName}</h2>

        <button onClick={()=>{setperson({lname:"Vasu",fname:"Srividya"})}}>Display person</button>
        <p>{person.lname} - {person.fname}</p>

        <button onClick={()=>{setusers(["IFB","Bosch","Oppo"])}}>Display Users</button>
        <ul>
            {users.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
    </div>
  )
}
