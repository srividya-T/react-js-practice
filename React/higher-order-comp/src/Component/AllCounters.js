import React from 'react'
import ClickCounter1 from './ClickCounter1'
import Clickcounter2 from './Clickcounter2'
import HoverCount2 from './HoverCount2'
import HoverCounter1 from './HoverCounter1'

export const AllCounters = () => {
  return (
    <div>
        {/* <ClickCounter1/>
        <hr/>
        <HoverCounter1/> */}
        <Clickcounter2/>
        <hr/>
        <HoverCount2/>
    </div>
  )
}
