import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import articles from "./article-content";
import { CommentContext } from "../context/CommentsContext";
import useUser from "../context/useUser";

const ArticlePage = () => {
  const [comments, setComments] = useContext(CommentContext);
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();
  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && (await user.getIdToken());
      const response = await axios.get(`/api/articles/${articleId}`, {
        headers: { authtoken: token },
      });
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
      setComments(response.data.comments);
    };

    loadArticleInfo();
  }, []);
  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <>
      <h1>{article.title}</h1>
      <div className="upvotes-section">
        {user ? <button onClick={addUpvote}>Upvote</button> : <button>login to upvote</button>}

        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user ? <AddCommentForm articleName={articleId} /> : <button>login to add a comment</button>}
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
