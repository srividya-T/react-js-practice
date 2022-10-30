import React, { Component } from "react";
import { HOCCounter } from "./HOCCounter";

class HoverCount2 extends Component {
  render() {
    return (
      <div>
        <p>HoverCount2</p>
        <h2 onMouseOver={this.props.handleClickcount}>
          Mouse Hover Count Increase: {this.props.count}
        </h2>
      </div>
    );
  }
}
export default HOCCounter(HoverCount2);
