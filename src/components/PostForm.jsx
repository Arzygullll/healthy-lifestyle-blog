// import { useContext } from "react";
// import { postContext } from "../context/PostContextProvider";
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { postContext } from "../context/PostContextProvider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const PostForm = ({ title, img, author, content, id }) => {
  const { deletePost } = useContext(postContext);
  return (
    <Card className="post-card">
      <CardContent className="post-card-content">
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {author}
        </Typography>
        <img src={img} alt={title} className="post-image" />
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions className="post-card-actions">
        <Button
          onClick={() => deletePost(id)}
          variant="contained"
          color="error"
        >
          УДАЛИТЬ
        </Button>
        <NavLink to={`/edit/${id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            РЕДАКТИРОВАТЬ
          </Button>
        </NavLink>
        <NavLink to={`/post/${id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            ДЕТАЛЬНЫЙ ОБЗОР
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default PostForm;

// import { Button } from "@mui/material";
// import React, { useContext } from "react";
// import { PostContext, postContext } from "../context/PostContextProvider";
// import { NavLink } from "react-router-dom";

// const PostForm = ({ title, img, author, content, id }) => {
//   const { deletePost } = useContext(postContext);
//   return (
//     <div>
//       <h3>{title}</h3>
//       <h4>{author}</h4>
//       <img src={img} width={"200"} height={"200"} />
//       <h5>{content}</h5>
//       <Button onClick={() => deletePost(id)} variant="contained" color="error">
//         DELETE
//       </Button>
//       <NavLink to={`/edit/${id}`}>
//         <Button variant="contained">EDIT</Button>
//       </NavLink>
//       <NavLink to={`/post/${id}`}>
//         <Button variant="contained">Details</Button>
//       </NavLink>
//     </div>
//   );
// };

// export default PostForm;
