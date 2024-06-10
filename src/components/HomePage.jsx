import React from "react";
import { Container } from "@mui/material";
import PostList from "./PostList";

const HomePage = () => {
  return (
    <Container className="home-page-container">
      <PostList />
    </Container>
  );
};

export default HomePage;
