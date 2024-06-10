// import React, { useContext, useEffect } from "react";
// import PostForm from "./PostForm";
// import { postContext } from "../context/PostContextProvider";
// import { Container } from "@mui/material";

import { useContext, useEffect } from "react";
import { postContext } from "../context/PostContextProvider";
import { Container } from "@mui/material";
import PostForm from "./PostForm";

const PostList = () => {
  const { posts, getPosts } = useContext(postContext);
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <Container className="post-list-container">
      <div className="posts-wrapper">
        {posts.map((post) => (
          <PostForm key={post.id} {...post} />
        ))}
      </div>
    </Container>
  );
};

export default PostList;
