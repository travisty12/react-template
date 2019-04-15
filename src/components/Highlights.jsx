import React from 'react';
import Post from './Post';

var postList = [
  {
    title: 'First Post Title',
    author: 'First Post Author',
    details: 'First Post Details'
  },
  {
    title: 'Second Post Title',
    author: 'Second Post Author',
    details: 'Second Post Details'
  },
  {
    title: 'Third Post Title',
    author: 'Third Post Author',
    details: 'Third Post Details'
  },
];

function Highlights(){
  return (
    <div>
      <h2>HIGHLIGHTS JSX: You could put a spread of highlighted images or posts below.</h2>
      {postList.map((post, index) =>
        <Post title={post.title}
          author={post.author}
          details={post.details}
          key={index} />
      )}
    </div>
  );
}

export default Highlights;
