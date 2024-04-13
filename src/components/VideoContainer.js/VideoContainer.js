import React, { useEffect,useState  } from 'react'
import { YOUTUBE_VIDEOS_API } from '../../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import "./videoContainer.css"
const VideoContainer = () => {

  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])


  const getVideos = async ()=>{
    const data = await fetch (YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items)
  };

  return (
    <div className='video-container'>
      {/* Map through videos and create a Link for each */}
      {videos.map(video => (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
          {/* Ensure VideoCard is rendered only when videos.length is greater than 0 */}
          {videos.length > 0 && <VideoCard info={video} key={video.id} />}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;