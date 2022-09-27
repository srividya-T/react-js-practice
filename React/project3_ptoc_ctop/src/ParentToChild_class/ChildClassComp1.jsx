import React, { Component } from 'react'

export default class ChildClassComp1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showusers:false,
         showPerson:false,
         showuserName:false
      }
    }
    handleAshowusers = ()=>{
        this.setState({showusers:true})
    }
    handleAshowpersons = ()=>{
      this.setState({showPerson:true})
    }
    handleAshowusername = () =>{
      this.setState({showuserName:true})
    }
  render() {
    return (
      <div>
        <button onClick={this.handleAshowusers}>Show Users</button>
        {this.state.showusers && (
            <ul>
                {this.props.allusers.map((user,i)=>{
                    return <li key={i}>{user}</li>
                })}
            </ul>
        )}
        <button onClick={this.handleAshowpersons}>Show Persons</button>
        {this.state.showPerson && 
          <p>{this.props.allPersons.red}-{this.props.allPersons.blue}</p>
        }

        <button onClick={this.handleAshowusername}>Show User Name</button>
        {this.state.showuserName && (
          <h2>{this.props.allUsernames}</h2>
        )}
      </div>
    )
  }
}
