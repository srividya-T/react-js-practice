import React from 'react'

const Child_1 = ({personDetails}) => {
    console.log(personDetails)
  return (
    <div>
        <p>{personDetails.fname} - {personDetails.lname}</p>
    </div>
  )
}

export default Child_1