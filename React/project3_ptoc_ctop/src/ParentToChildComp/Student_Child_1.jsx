import React from 'react'
import { useState } from 'react';

const Student_Child_1 = ({getData}) => {
    const [studentDetails, setstudentDetails] = useState(["Manikanta","Vasu","Vidya"]);
    const sendDataFromParent=()=>{
        getData(studentDetails)
    }
  return (
    <div>
        <button onClick={sendDataFromParent}>Send Data From Parent</button>
    </div>
  )
}

export default Student_Child_1