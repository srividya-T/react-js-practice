import logo from './logo.svg';
import './App.css';
import ClassComp1 from './Components/ClassComponent/ClassComp1';
import ClassComp2 from './Components/ClassComponent/ClassComp2';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <ClassComp1 sendMessage={sendMessage} sendPerson={sendPerson} sendUsers={sendUsers} />
      <ClassComp2 message={message} newperson={newperson} newuser={newuser} />
    </div>
  );
}

export default App;
