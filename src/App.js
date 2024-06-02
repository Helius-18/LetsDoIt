// App.js
import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import axios from 'axios';

const App = ({ theme }) => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/get-posts')
      setPosts(response.data);
    } catch (error) {
      console.log('Error loading Posts', error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts align-items-center m-md-5 d-flex flex-column gap-3 mb-5">
      {posts.map(post => (
        <Post key={post._id} {...post} />
      ))}
    </div>
  );
};

export default App;
