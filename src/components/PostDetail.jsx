import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { postContext } from "../context/PostContextProvider";
import { API2 } from "../helpers/const";
import { Button, TextField } from "@mui/material";
// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { postContext } from "../context/PostContextProvider";
// import { API2 } from "../helpers/const";
// import { Button, TextField } from "@mui/material";

const PostDetail = () => {
  const { id } = useParams();
  const { getOnePost, onePost } = useContext(postContext);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostAndComments = async () => {
      setLoading(true);
      try {
        await getOnePost(id);

        const response = await axios.get(`${API2}?postId=${id}`);
        setComments(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPostAndComments();
  }, [id, getOnePost]);

  const handleAddComment = async () => {
    try {
      const response = await axios.post(API2, {
        body: newComment,
        postId: id,
        author: "currentUser",
      });

      setComments([...comments, response.data]);

      setNewComment("");
    } catch (err) {
      setError(err);
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  // if (loading) {
  //   return (
  //     <div className="container">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <div className="container">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (!onePost || !onePost.id) {
    return (
      <div className="container">
        <p>Post not found</p>
      </div>
    );
  }
  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`${API2}/${commentId}`);

      setComments(comments.filter((comment) => comment.id !== commentId));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="detail-container">
      <h3>{onePost.title}</h3>
      <h4>{onePost.author}</h4>
      <img src={onePost.img} alt={onePost.title} width="400" height="400" />
      <p>{onePost.content} </p>
      <Button onClick={handleBackClick} variant="outlined">
        НАЗАД
      </Button>
      <div>
        <h4>Комментарии:</h4>
        {comments.map((comment) => (
          <div
            key={comment.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ flexGrow: 1 }}>
              <p>{comment.body}</p>
              <p>{comment.author}</p>
            </div>
            <Button
              onClick={() => handleDeleteComment(comment.id)}
              variant="outlined"
              color="error"
            >
              УДАЛИТЬ
            </Button>
          </div>
        ))}
        <TextField
          label="Добавить комментарий"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button onClick={handleAddComment} variant="contained">
          ДОБАВИТЬ
        </Button>
      </div>
    </div>
  );
};

export default PostDetail;
