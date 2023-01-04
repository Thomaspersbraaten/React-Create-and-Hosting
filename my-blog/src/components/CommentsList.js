import { useContext } from "react";
import { CommentContext } from "../context/CommentsContext";

const CommentsList = () => {
  const [comments, setComments] = useContext(CommentContext);

  if (comments) {
    return (
      <>
        <h3>Comments:</h3>
        {comments.map((comment, i) => (
          <div className="comment" key={comment.postedBy + ": " + comment.text + i}>
            <h4>{comment.postedBy}</h4>
            <p>{comment.text}</p>
          </div>
        ))}
      </>
    );
  } else {
    return <div>nope</div>;
  }
};

export default CommentsList;
