import React from 'react'
import './chatmessage.css'
const ChatMessage = ({name,message}) => {
  return (
    <div className='main1'>
    <img src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' alt='user' className='logo'/>
    <span className='name'>{name}</span>
    <span>{message}</span>
    </div>
  )
  
}

export default ChatMessage;