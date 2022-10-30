import React, { Component } from 'react'
import { HOCCounter } from './HOCCounter'

export class Clickcounter2 extends Component {
    
  render() {
    return (
      <div>
        <p>Clickcounter2</p>
        <button onClick={this.props.handleClickcount}>Click the Counter Increase</button>
        <h2>Counter Increse: {this.props.count}</h2>
      </div>
    )
  }
};
export default HOCCounter(Clickcounter2)
