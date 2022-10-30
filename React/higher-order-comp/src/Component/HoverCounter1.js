import React, { Component } from "react";
import { HocComponent1 } from "./HocComponent1";

export class HoverCounter1 extends Component {
  render() {
    return (
      <div>
        <p>HoverCounter1</p>
        <h2 onMouseOver={this.props.handleIncrement}>
          The Count is: {this.props.count}
        </h2>
      </div>
    );
  }
}

export default HocComponent1(HoverCounter1);
