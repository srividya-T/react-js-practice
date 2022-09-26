import React, { Component } from 'react'
import ParentClasComp1 from './ParentClasComp1'
import ParentCompClass from './ParentCompClass'
import ParentComponent from './ParentComponent'

export default class AllClasscomponents extends Component {
  render() {
    return (
      <div>
        {/* <ParentClasComp1/> */}
        <ParentCompClass/>
        {/* <ParentComponent/>         */}
      </div>
    )
  }
}
