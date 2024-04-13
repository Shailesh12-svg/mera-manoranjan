import React from 'react'
import SideBar from '../Sidebar/SideBar';
import { Outlet } from 'react-router-dom';
import '../Body/body.css'

const Body = () => {
  return (
    <div className='body'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body;