import React from 'react';
import './commentscontainer.css';

const Comment = ({ data }) => {
  const { name, text, time } = data;

  return (
    <div className="comment">
      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="User Avatar" className="comment-avatar" />
      <div className="comment-content">
        <p className="name">{name}</p>
        <p className="comment-text">{text}</p>
        <span className="comment-timestamp">{time}</span>
        
      </div>
    </div>
  );
};


export default Comment;
