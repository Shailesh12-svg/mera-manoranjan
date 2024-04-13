import React from 'react'
import ButtonList from '../Body/ButtonList'
import VideoContainer from '../VideoContainer.js/VideoContainer'
import '../MainContainer/mainContainer.css';
const MainContainer = () => {
  return (
    <div className='main-container'>
    <ButtonList/>
      <VideoContainer/>
    </div>
      
  )
}

export default MainContainer