import React from 'react'
import { Userconsumer } from '../Context/userContext'

const User1 = () => {
  return (
    <div>
        <p>User1</p>
        <Userconsumer>
            {(value)=>{
                return <ul>
                    {value.map((user,i)=>{
                        return <li key={i}>{user.fname}</li>
                    })}
                </ul>
            }}
        </Userconsumer>
        
    </div>
  )
}

export default User1