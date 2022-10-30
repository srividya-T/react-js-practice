import React, { Component } from "react";

export default class HoverCounter extends Component {
  
  render() {
    return (
      <div>
        <p>HoverCounter</p>
        <h2 onMouseOver={this.props.incrementCount} onMouseOut={this.props.decrementCount}>
          Incremtent Count : {this.props.count} Time
        </h2>
      </div>
    );
  }
}
