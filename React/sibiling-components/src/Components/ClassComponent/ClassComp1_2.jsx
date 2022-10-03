import React from 'react'
import { useState } from 'react';
import ClassComp1 from './ClassComp1';
import ClassComp2 from './ClassComp2';

export const ClassComp1_2 = () => {
  const [message, setmessage] = useState("");
  const [newperson, setnewperson] = useState({});
  const [newuser, setnewuser] = useState([])
  const sendMessage = (msg)=>{
    setmessage(msg)
  }
  const sendPerson = (per)=>{
    setnewperson(per)
  }
  const sendUsers = (userInfo)=>{
    setnewuser(userInfo)
  }
  return (
    <div>
      <ClassComp1 sendMessage={sendMessage} sendPerson={sendPerson} sendUsers={sendUsers} />
      <ClassComp2 message={message} newperson={newperson} newuser={newuser} />
    </div>
  )
}
