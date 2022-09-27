import React from 'react'
import { useState } from 'react'
import Child3 from './Child3'

const Parent3 = () => {
    const [meassage, setmeassage] = useState("");
    const [person, setperson] = useState({});
    const [users, setusers] = useState([]);
    const sendMessage = ()=>{
        setmeassage("welcom to Functional Component Communication")
    }
    const sendPerson=()=>{
        setperson({
            fname:"Srinivas",
            lname:"Manikanta"
        })
    }
    const sendUsers = ()=>{
        setusers(["Sai","Ram","Padhmavathi"])
    }
  return (
    <div>
        <button onClick={sendMessage}>Send Message</button><br /><br />
        <button onClick={sendPerson}>Send Person</button><br /><br />
        <button onClick={sendUsers}>Send Users</button><br />
        <Child3 meassage={meassage} person={person} users={users}/>
    </div>
  )
}

export default Parent3