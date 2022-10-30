import React, { Component } from 'react'

export default class NewChildComp extends Component {

  render() {
    return (
      <div>
        <p>NewChildComp</p>
        <h2>Message From Parent Component: {this.props.xyz}</h2>
      </div>
    )
  }
}
