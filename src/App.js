// App.js
import React, { useContext, useEffect, useState } from 'react';
import Post from './components/Posts/Post';
import axios from 'axios';
import config from './appSettings.json'
import { apiRoutes } from './apiRoutes';
import { AppContext } from './AppContext';

const App = () => {
  const { setLoading } = useContext(AppContext);

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${config.apiUrl}${apiRoutes.getPosts}`)
      setPosts(response.data);
    } catch (error) {
      console.log('Error loading Posts', error);
    }
    setLoading(false);
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
