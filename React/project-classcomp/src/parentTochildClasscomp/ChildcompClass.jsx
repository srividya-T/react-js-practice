import React, { Component } from 'react'

export default class ChildcompClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        showmyName: false,
        showPerson: false,
        showUser: false
      }
    }
    handleAshowmyname = () =>{
      this.setState({showmyName:true})
    }
    handleAperson = ()=>{
      this.setState({showPerson:true})
    }
    handleAshowusers = () =>{
        this.setState({showUser:true})
    }
  render() {
    return (
      <div>
        <button onClick={this.handleAshowmyname}>Show my Name</button>
        {this.state.showmyName && (
          <h2>{this.props.allMyNames}</h2>
        )}
        <hr />
        <button onClick={this.handleAperson}>Show Person</button>
        {this.state.showPerson && (
            <h2>{this.props.allPersons.Dell-this.props.allPersons.Black-this.props.allPersons.price}</h2>
        )}
        <hr />
        <button onClick={this.handleAshowusers}>Show Users</button>
        {this.state.showUser && (
            <ul>
            {this.props.allUsers.map((user,i)=>{
                return <li key={i}>{user}</li>
            })}
        </ul>
        )}
      </div>
    )
  }
}
