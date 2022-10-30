import React, { Component } from 'react'
import NewChildComp from './NewChildComp'
import TextComponent from './TextComponent'

export default class NewParentcom extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Welcome to Parent Component"
      }
    }
    sendMessage = () => {
        return <TextComponent msg={this.state.message}/>
    }
  render() {
    return (
      <div>
        <p>NewParentcom</p>
        <NewChildComp xyz={this.sendMessage()}/>
      </div>
    )
  }
}
