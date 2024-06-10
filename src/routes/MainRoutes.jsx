import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPost from "../components/AddPost";
import HomePage from "../components/HomePage";
import EditPost from "../components/EditPost";
import PostDetail from "../components/PostDetail";
// import { Route, Routes } from "react-router-dom";
// import AddPost from "../components/AddPost";
// import HomePage from "../components/HomePage";
// import EditPost from "../components/EditPost";
// import PostDetail from "../components/PostDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddPost />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/edit/:id" element={<EditPost />} />
      <Route path="/post/:id" element={<PostDetail />} />
    </Routes>
  );
};

export default MainRoutes;
