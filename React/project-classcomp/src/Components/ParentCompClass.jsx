import React, { Component } from 'react'
import ChildcompClass from './ChildcompClass'

export default class ParentCompClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        myName : "Venkat",
        person : {
          Phone : "Moto",
          Colour : "Blue",
          price : 13000          
        },
        users : ["Lg","Moto","Samsung"]
        
      }
    }
  render() {
    return (
      <div>
        <ChildcompClass 
        allMyNames={this.state.myName}
        allPersons={this.state.person}
        allUsers={this.state.users}/>
      </div>
    )
  }
}
