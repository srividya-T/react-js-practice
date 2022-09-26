import React from 'react'
import { useState } from 'react'

const Child_3 = ({getData}) => {
  const [studentDetails, setstudentDetails] = useState(["Ram","Sam","Sumdher"])
  const sendDataFromparent=()=>{
    getData(studentDetails)
  }
  return (
    <div>
      <button onClick={sendDataFromparent}>Send Data From Parent</button>
    </div>
  )
}

export default Child_3