import React, { Component } from "react";
import { HocComponent1 } from "./HocComponent1";

export class ClickCounter1 extends Component {
  render() {
    return (
      <div>
        <p>ClickCounter</p>
        <button onClick={this.props.handleIncrement}>Click to Increment Count</button>
        <h2>The Count is :{this.props.count}</h2>
      </div>
    );
  }
}

export default HocComponent1(ClickCounter1)