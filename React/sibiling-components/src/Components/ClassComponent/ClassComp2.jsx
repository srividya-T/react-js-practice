import React, { Component } from 'react'

export default class ClassComp2 extends Component {
  render() {
    
    return (
      <div>
        <p>Component 2</p>
        {this.props.message} <br />
        {this.props.newperson.fname}  {this.props.newperson.lname} <br />
        <ul>
          {this.props.newuser.map((user,i)=>{
            return <li key={i}>{user.fname}-{user.lname}</li>
          })}
        </ul>
      </div>
    )
  }
}
