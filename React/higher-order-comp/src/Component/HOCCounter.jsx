import React, { Component } from "react";

export const HOCCounter = (Oroginalcounter) => {
  class HOCCounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      handleClickcount = () =>{
          this.setState({count:this.state.count+1})
      }
    render() {
      return <Oroginalcounter count={this.state.count} handleClickcount={this.handleClickcount}/>;
    }
  }

  return HOCCounter;
};
