import React from 'react'
import Toaster from './Toaster'
import { Outlet } from 'react-router-dom'
import Loader from './Loader'

const Helper = ({toaster}) => {
  return (
    <div>
      <Loader/>
      <Outlet/>
      <Toaster toaster={toaster}/>
    </div>
  )
}

export default Helper