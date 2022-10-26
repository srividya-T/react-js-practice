import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Userstable from './Userstable';
const Users = () => {
  const [allUsers, setallUsers] = useState([]);
  useEffect(()=>{
    const url = "http://localhost:3000/users";

    axios.get(url).then((resopone)=>{setallUsers(resopone.data)})
  },[])
  return (
    <div>
      <Userstable filltextUsers={allUsers}/>
    </div>
  )
}

export default Users