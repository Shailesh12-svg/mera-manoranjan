import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className='comment-children'>
            <Comment data={comment}/> 
            <Comment data={comment}/> 
            <Comment data={comment}/> 
            </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
