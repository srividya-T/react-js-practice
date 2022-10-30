import React, { Component } from 'react'

export default class ClickCounter extends Component {
    
  render() {
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.incrementCount}>Increment</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
        <h2>Count Increment : {this.props.count} Time</h2>
      </div>
    )
  }
}
