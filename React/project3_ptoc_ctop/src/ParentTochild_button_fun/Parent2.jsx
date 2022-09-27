import React from "react";
import { useState } from "react";
import Child2 from "./Child2";

const Parent2 = () => {
  const [message, setmessage] = useState("");
  const [person, setperson] = useState({});
  const [users, setusers] = useState([]);
  const sendMessage = () => {
    setmessage("welcom to Functional Component Communication");
  };
  const sendPerson = () => {
    setperson({
      fname: "Vasu",
      lname:"Vidya"
    });
  };
  const sendArray = () => {
    setusers(["Vidya","Srinivas"]);
  };
  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>
      <br />
      <br />
      <button onClick={sendPerson}>Send Person</button>
      <br />
      <br />
      <button onClick={sendArray}>Send Array</button>
      <br />
      <br />
      <Child2 message={message} person={person} users={users} />
    </div>
  );
};

export default Parent2;
