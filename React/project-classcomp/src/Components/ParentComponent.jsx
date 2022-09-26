import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users:["Srinivas","Srividya","Manikanta","Vasu"]
      }
    }
  render() {
    return (
      <div>
        <ChildComponent allUsers={this.state.users}/>
      </div>
    )
  }
}
