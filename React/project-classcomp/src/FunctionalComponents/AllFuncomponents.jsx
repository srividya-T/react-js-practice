import React from 'react'
import { Functionalcomp1 } from './Functionalcomp1'
import { FunctionalComp2 } from './FunctionalComp2'
import { ParentFunComponent } from './ParentFunComponent'

export const AllFuncomponents = () => {
  return (
    <div><ParentFunComponent/>
        <Functionalcomp1/>
        <FunctionalComp2/>
    </div>
  )
}
