// App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import BottomNavbar from './components/BottomNavbar';

const App = () => {
  const posts = [
    {
      id: 1,
      title: 'The Surprising Benefits of Meditation',
      subtitle: 'By John Doe, May 13, 2024',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      comments: [
        { name: 'Jane Smith', text: 'I\'ve been practicing meditation for a few months now and it\'s really helped me manage my stress and anxiety. Highly recommend giving it a try!', time: '2 days ago' },
        { name: 'Michael Johnson', text: 'I\'m new to meditation but this article has inspired me to give it a try. Can\'t wait to experience the benefits for myself.', time: '1 week ago' }
      ],
      images : [
        { src : 'https://generated.vusercontent.net/placeholder.svg'},
        { src : 'https://generated.vusercontent.net/placeholder.svg'},
        { src : 'https://generated.vusercontent.net/placeholder.svg'}
      ]
    },
    {
      id: 2,
      title: 'The Surprising Benefits of Meditation',
      subtitle: 'By John Doe, May 13, 2024',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      comments: [
        { name: 'Jane Smith', text: 'I\'ve been practicing meditation for a few months now and it\'s really helped me manage my stress and anxiety. Highly recommend giving it a try!', time: '2 days ago' },
        { name: 'Michael Johnson', text: 'I\'m new to meditation but this article has inspired me to give it a try. Can\'t wait to experience the benefits for myself.', time: '1 week ago' }
      ],
      images : [
        { src : 'https://generated.vusercontent.net/placeholder.svg'},
        { src : 'https://generated.vusercontent.net/placeholder.svg'},
        { src : 'https://generated.vusercontent.net/placeholder.svg'}
      ]
    }
    // Add more posts as needed
  ];

  return (
    <div className="d-flex" data-bs-theme="dark">
      <Sidebar />
      <div className="container mt-4">
        <div className="posts d-flex flex-column gap-3">
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default App;
