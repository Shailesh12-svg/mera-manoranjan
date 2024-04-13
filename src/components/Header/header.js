import React, { useEffect, useState } from 'react'
import '../Header/header.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../../utils/appSlice';
import { YOUTUBE_SUGESTION_API } from '../../utils/constants';
import { cacheResults } from '../../utils/searchSlice';
import CommentsContainer from '../CommentsContainer/CommentsContainer';

const Header = () => {

  const [searchQuery,setSearchQuery]=useState('');
  const [suggestions,setSuggestions]=useState([]);
  const [showsuggestions,setShowSuggestion] = useState(false);
  
  const searchCache = useSelector(store=>store.search);
  useEffect(()=>{
    
    //Api call after 200ms 
     const timer =setTimeout(()=>{
     /*{ 
      searchCache={
        "iphone": ["iphone11 ,"iphone14]
      }
     */
      
     if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else{
        getSearchSuggestions();
      }
    },200);

      
     return ()=>{
      clearTimeout(timer);
     }
    
  },[searchQuery]);

  const getSearchSuggestions = async ()=>{
    
    const data = await fetch(YOUTUBE_SUGESTION_API+searchQuery);
    const json =  await data.json();
    // console.log(json[1])
    setSuggestions(json[1])

    //update the cache  
    dispatch(cacheResults(
      {
        [searchQuery]:json[1],
      }
    ))
  };

  //Dispatch an action
const dispatch =useDispatch();
const toggleMenuHandler =()=>{
  dispatch(toggleMenu());
}
return (
  <div className='main'>
    <div className='header'>
      <img className='hamburger' onClick={() => toggleMenuHandler()} src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' alt='ham' />
      <img className='youtube-logo' src='https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg' alt="youtube-logo" />
    </div>
    <div className='search-container'>
      <div>
        <input
          className='search-input'
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
       
        <button className='search-button'>🔍</button>
      </div>
      {showsuggestions && (
        <div className='suggestions-container'>
          <ul className='suggestions'>
            {suggestions.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
    <div className='user'>
      <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user' />
    </div>
    
  </div>
);
      };

export default Header;