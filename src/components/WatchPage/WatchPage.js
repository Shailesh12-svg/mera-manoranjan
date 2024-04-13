import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import './watchpage.css';
import CommentsContainer from '../CommentsContainer/CommentsContainer';
import LiveChat from '../LiveChat/LiveChat';

const WatchPage = () => {
  
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className='videos1'>
      <div className='video-container'>
        <iframe 
          className='video-iframe' 
          src={"https://www.youtube.com/embed/"+searchParams.get('v')} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
        <div className='live-chat-container'>
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
}

export default WatchPage;