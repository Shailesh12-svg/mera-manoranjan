import React, { useEffect, useState } from 'react';
import './livechat.css';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../utils/chatSlice';
import { generateRandomNames, makeRandomMessage } from '../../utils/helper';

const LiveChat = () => {
    // Pooling logic 
    const[LiveMessage,setLiveMessage]=useState('');
    const dispatch =useDispatch();

    const chatMessages = useSelector(store=>store.chat.messages);


    useEffect(() => {
        const intervalId = setInterval(() => {
            // API Polling fetch and covert it in json and 
            
            dispatch(addMessage({
                name:generateRandomNames(),
                message:makeRandomMessage(20),
            }))
            
        }, 2000);

        // Cleanup function
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        
        <form className='Live-chat' onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:'Shailesh Mallick',
                message:LiveMessage,
            }))
            setLiveMessage('');
        }}>
            <div className='text-me-container'>
            <div>
           <input type='text' className='text-me' placeholder='Chat'value={LiveMessage} onChange={(e)=>setLiveMessage(e.target.value)}/>
           </div>
           <div>
           <button type='submit' className='submit-btn'>👍🏻</button> 
           </div>
           
        
        </div>
            <div>
            {/* Dont use index as id */}
            {chatMessages.map((c,i)=><ChatMessage 
            name={c.name} 
            message={c.message}
            key={i} />)}
        </div>
        </form>
    );
};

export default LiveChat;
