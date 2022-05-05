import React from "react";
import { useQuery } from "react-query";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Post = ({ postId, goback }) => {
  const { data, isLoading } = useQuery(["post", postId], () =>
    fetcher(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  );

  if (isLoading) {
    return <p>Loading post...</p>;
  }

  return (
    <div>
      <a href="#" onClick={goback}>
        Go back
      </a>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
