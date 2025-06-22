import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <p className="text-center text-gray-700 dark:text-gray-300 text-lg">
        Loading posts...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-600 dark:text-red-400 text-lg">
        Error: {error}
      </p>
    );

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">Latest Posts</h1>
      <div className="space-y-6 max-w-3xl mx-auto">
        {posts.map(({ id, title, body }) => (
          <Card key={id} title={title}>
            <p>{body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}