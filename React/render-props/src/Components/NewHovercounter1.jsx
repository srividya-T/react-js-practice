import React, { Component } from "react";

export default class NewHovercounter1 extends Component {
  
  render() {
    return (
      <div>
        <p>NewHovercounter1</p>
        <h1 onMouseOver={this.props.incrementCount} onMouseOut={this.props.decrementCount}>
          Hovered {this.props.count} Time
        </h1>
      </div>
    );
  }
}
