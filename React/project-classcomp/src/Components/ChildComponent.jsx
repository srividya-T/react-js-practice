import React, { Component } from 'react'

export default class ChildComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showUsers :false
      }
    }
    handleAshowusers = ()=>{
        this.setState({showUsers:true});
    }
  render() {
    return (
      <div>
        <button onClick={this.handleAshowusers}>Show Users</button>
        {this.state.showUsers && (
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
