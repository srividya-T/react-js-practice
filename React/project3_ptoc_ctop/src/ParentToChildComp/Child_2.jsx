import React from 'react'
import { useState } from 'react'

const Child_2 = ({getData}) => {
    const [personDetails, setpersonDetails] = useState(["vasu","Vidya","Manikanta"])
    const sendDataFromparent = ()=>{
        getData(personDetails)
    }
  return (
    <div>
        <button onClick={sendDataFromparent}> Send Data to Parent </button>
    </div>
  )
}

export default Child_2