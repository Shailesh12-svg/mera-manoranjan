import React from 'react'
import '../Sidebar/sidebar.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const SideBar = () => {
  //subscribe to specific portion
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  
  if(!isMenuOpen) return null; //Early return

  return (
    <div className='side-bar'>
      <ul>
        <ul><Link to="/">Home</Link></ul>
        <ul>Shorts</ul>
        <ul>Subscriptions</ul>
      </ul>
      <hr/>
      <ul>
      <h2>You</h2>
        <ul>Your channel</ul>
        <ul>History</ul>
        <ul>Your videos</ul>
        <ul>Watch Later</ul>
      </ul>
      <hr/>
      <ul>
      <h2>Subscriptions</h2>
        <ul>Music</ul>
        <ul>Sports</ul>
        <ul>Gaming</ul>
        <ul>Movies</ul>
      </ul>
      <hr/>
    </div>
  )
}

export default SideBar