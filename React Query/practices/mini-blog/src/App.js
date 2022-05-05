import "./App.css";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Post from "./Post";

const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const [postId, setPostId] = useState(null);

  const { isLoading, data: posts } = useQuery("posts", () =>
    fetcher("https://jsonplaceholder.typicode.com/posts")
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (postId !== null) {
    return <Post postId={postId} goback={() => setPostId(null)} />;
  }

  return (
    <div className="App">
      {posts.map((post) => {
        return (
          <p key={post.id}>
            <a onClick={() => setPostId(post.id)} href="#">
              {post.id} - {post.title}
            </a>
          </p>
        );
      })}
    </div>
  );
}

export default App;
