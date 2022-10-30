import React, { Component } from "react";

export default class NewclickCounter1 extends Component {
 
  render() {
    return (
      <div>
        <p>NewclickCounter1</p>
        <button onClick={this.props.incrementCount}>
          Click Increment Counter
        </button>
        <button onClick={this.props.decrementCount}>
          Click decrement Counter
        </button>
        <h1>Clicked: {this.props.count} time</h1>
      </div>
    );
  }
}
