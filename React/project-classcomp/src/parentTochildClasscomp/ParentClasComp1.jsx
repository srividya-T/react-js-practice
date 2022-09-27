import React, { Component } from 'react'
import ChildClassComp1 from './ChildClassComp1'

export default class ParentClasComp1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users : ["Vasu","Vidya"],
         person: {
          fname:"Moto",
          lname:"Lg"
         },
         username:["blue","red"]
      }
    }
  render() {
    return (
      <div>
        <ChildClassComp1 allusers={this.state.users} 
        allPersons={this.state.person}
        allUsernames={this.state.username}/>
      </div>
    )
  }
}
