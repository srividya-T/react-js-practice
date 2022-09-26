import React, { useState } from 'react'

export const ParentFunComponent = () => {
    // React Hooks
    const [myName,setmyName]=useState("Vidya")
    const [person, setperson] = useState({
      fname:"Vasu",
      lname:"Vidya",
      email:"vidyachowdary7@gmail.com"
    })
    const [users, setusers] = useState(["Krina","Ram","Shiva","Padhmavathi"])
  return (
    <div>      

      <button onClick={()=>{setmyName("Vasu")}}>Display Name</button>

      <button onClick={()=>{setperson({fname:"Ram",lname:"Leela",email:"Ram@gmail.com"})}}>
        Display person Details</button>

      <button onClick={()=>{setusers(["Mamatha","Mani","Anusha","Ravi"])}}>Display Array</button>

        <h2>My Name is: {myName}</h2>

        <p>{person.fname} - {person.lname} - {person.email}</p>

        <ul>
          {users.map((user,i)=>{
            return <li key={i}>{user}</li>
          })}
        </ul>
    </div>
  )
}
