
import React from 'react'
import "./videoCart.css"

const VideoCard = ({info}) => {
    
    //Destructuring it ..
     const {snippet,statistics} = info;
     const {channelTitle,title,thumbnails}=snippet;
    return (
    <div className='videos'>
         <img alt="videos-cart"src ={thumbnails.medium.url}/>
        <ul>
            <ul className='title'>{title}</ul>
            <ul>{channelTitle}</ul>
            <ul className='stats'>{statistics.viewCount}Views.</ul>
            </ul> 
    </div>
  )
}
const fn =(VideoCard)=>{
  return <VideoCard/>;
}

export default VideoCard;