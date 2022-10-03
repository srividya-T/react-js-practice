import React, { Component } from 'react'

export default class Component_2 extends Component {
  render() {
    return (
      <div>
        <p>Component_2</p>
        {this.props.message} <br />
        {this.props.person.fname} - {this.props.person.lname} <br />
        <ul>
            {this.props.users.map((user,i)=>{
                return <li key={i}>{user.fname} {user.lname}</li>
            })}
        </ul>
      </div>
    )
  }
}
