import React from 'react';
import './Posts.css';

const Posts = (props) => {
  return(
    <div className="post">
      <h1>{props.title} Subscriber</h1>
      <p><b>{props.subs}</b></p>
    </div>
  );
}

export default Posts;
