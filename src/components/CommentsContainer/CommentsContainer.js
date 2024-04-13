// CommentsContainer.js

import React from 'react';
import './commentscontainer.css'; // Import external CSS file

import CommentList from './CommentList';

const commentsData =[
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[
            {
                name:'Shailesh Mallick',
                text:"This is a comment",
                replies:[
        
                ],
                time:"1 hours ago",
            },
            {
                name:'Shailesh Mallick',
                text:"This is a comment",
                replies:[
        
                ],
                time:"1 hours ago",
            },
            {
                name:'Shailesh Mallick',
                text:"This is a comment",
                replies:[
        
                ],
                time:"1 hours ago",
            },

        ],
        time:"2 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[

        ],
        time:"1 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[

        ],
        time:"4 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[
            {
                name:'Shailesh Mallick',
                text:"This is a comment",
                replies:[
        
                ],
                time:"1 hours ago",
            },
            {
                name:'Shailesh Mallick',
                text:"This is a comment",
                replies:[
        
                ],
                time:"1 hours ago",
            },
        ],
        time:"3 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[

        ],
        time:"2 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[

        ],
        time:"2 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[

        ],
        time:"2 hours ago",
    },
    {
        name:'Shailesh Mallick',
        text:"This is a comment",
        replies:[

        ],
        time:"2 hours ago",
    }
]

const CommentsContainer = () => {
  return (
    <>
    <h1>Comments:</h1>
    <div className="comments-container">
      <div className="comment">
        <div className="comment-content">
          <CommentList comments={commentsData}/>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default CommentsContainer;
