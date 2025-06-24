// =================== pages/Posts.jsx ===================
import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Card key={post.id} title={post.title}>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
};

export default Posts;
