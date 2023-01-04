import { useContext, useState } from "react";
import axios from "axios";
import { CommentContext } from "../context/CommentsContext";

const AddCommentForm = ({ articleName }) => {
  const [comments, setComments] = useContext(CommentContext);

  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    if (name.length < 1 && commentText.length < 1) {
      return;
    }
    const response = await axios.post(`/api/articles/${articleName}/comments`, {
      postedBy: name,
      text: commentText,
    });
    setComments(response.data);
    setName("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
      </label>
      <label>
        Comment:
        <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} rows="4" cols="50" />
      </label>
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
