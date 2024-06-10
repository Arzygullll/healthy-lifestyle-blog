// import { Button, Container, TextField, Typography } from "@mui/material";
// import React, { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { postContext } from "../context/PostContextProvider";

import { useContext, useState } from "react";
import { postContext } from "../context/PostContextProvider";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";

const AddPost = () => {
  const { addPost } = useContext(postContext);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!title || !img || !author || !content) {
      alert("Заполните поля!");
      return;
    }
    let newPost = {
      title,
      img,
      author,
      content,
    };
    addPost(newPost);
    navigate("/");
  };
  return (
    <Container className="addPost">
      <Typography variant="h4" component="h2" gutterBottom>
        Здоровый образ жизни и фитнес
      </Typography>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => setImg(e.target.value)}
        label="Image URL"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => setAuthor(e.target.value)}
        label="Author"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        onChange={(e) => setContent(e.target.value)}
        label="Content"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button onClick={handleClick} variant="contained" color="primary">
        ДОБАВИТЬ ПОСТ
      </Button>
    </Container>
  );
};

export default AddPost;
