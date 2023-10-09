import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export const DashAdmin = () => {
  return (
    <>
    <Header>
        <Sidebar/>
        <Outlet/>
    </Header>
    </>
  )
}
