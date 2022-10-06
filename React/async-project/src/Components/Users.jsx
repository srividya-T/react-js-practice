import React, { useState } from 'react'

const Users = () => {
    const [person, setperson] = useState({
        fname:"",
        lname:""
    })
    const handleChange=(e)=>{
        var variableName = e.target.name;
        var newPerson = {...person}
        newPerson[variableName] = e.target.value;
        setperson(newPerson)
    }
    const addperson = () => {
        console.log(person)
    }
  return (
    <div>
        <label htmlFor="">First Name : </label>
        <input type="text" name="fname" value={person.fname} onChange={(e)=>{handleChange(e)}} /><br></br>
        <label htmlFor="">Last Name : </label>
        <input type="text" name="lname" value={person.lname} onChange={(e)=>{handleChange(e)}} /><br></br>
        <button onClick={addperson()}>Add User</button>
    </div>
  )
}

export default Users