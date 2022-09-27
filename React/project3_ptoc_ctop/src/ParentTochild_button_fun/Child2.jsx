import React from 'react'

const Child2 = ({message,person,users}) => {
  return (
    <div>
      {message && <p>Message From Parent Component : {message}</p>}

      {Object.keys(person).length > 0 && <p>Person Details From Parent :{person.fname} - {person.lname}</p>}   

      {users.length >0 && 
        <ul>
        {users.map((user,i)=>{
          return <li key={i}>{user}</li>
        })}
      </ul>
      }      
      
      
    </div>
  )
}

export default Child2