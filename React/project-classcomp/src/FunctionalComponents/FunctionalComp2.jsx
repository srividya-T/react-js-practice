import React, { useState } from 'react'

export const FunctionalComp2 = () => {
  const [myName, setmyName] = useState("Manikanta")
  const [person, setPerson]= useState({
    fname:"Sai",
    lname:"Kiran",
    email:"sai@gmail.com"
  })
  const [users, setusers] = useState(["Red","Green","Yellow"])
  return (
    <div>
      <button onClick={()=>{setmyName("Vasu")}}>Display my Name</button>
      <h2>Change my Name: {myName} </h2>
      <hr />
      <button onClick={()=>{setPerson({fname:"Ram",lname:"Vasu",email:"ram@gmail.com"})}}>Display person</button>
      <p>{person.fname}</p>
      <p>{person.lname}</p>
      <p>{person.email}</p>
      <hr />
      <button onClick={()=>{setusers(["Pink","Blue","Black"])}}>Display Users</button>
      <ul>
        {users.map((user,i)=>{
          return <li key={i}>{user}</li>
        })}
      </ul>
    </div>
  )
}
