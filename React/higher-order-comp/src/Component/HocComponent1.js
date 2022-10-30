import React, { Component } from "react";

export const HocComponent1 = (OriginalCopmonent) => {
  class HocComponent1 extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return <OriginalCopmonent count={this.state.count} handleIncrement={this.handleIncrement}/>;
    }
  }
  return HocComponent1;
};
