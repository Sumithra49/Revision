// src/components/PostList.js
import React from 'react';

const PostList = ({ posts }) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {posts.map((post) => (
        <li
          key={post.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '10px',
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small style={{ color: 'gray' }}>Tag: {post.tag}</small>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
