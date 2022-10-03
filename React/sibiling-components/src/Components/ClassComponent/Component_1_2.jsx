import React from 'react'
import { useState } from 'react'
import Component_1 from './Component_1'
import Component_2 from './Component_2'

export const Component_1_2 = () => {
    const [message, setmessage] = useState("");
    const [person, setperson] = useState({});
    const [users, setusers] = useState([]);

    const sendMessage = (msg)=>{
        setmessage(msg)
    }
    const sendPerson = (per) =>{
        setperson(per)
    }
    const sendUsers = (user) =>{
        setusers(user)
    }
  return (
    <div>
        <Component_1 sendMessage={sendMessage} sendPerson={sendPerson} sendUsers={sendUsers}/>
        <Component_2 message={message} person={person} users={users}/>
    </div>
  )
}
