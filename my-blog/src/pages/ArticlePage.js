// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import articles from "./article-content";
// import NotFoundPage from "./NotFoundPage";
// import axios from "axios";
// import CommentsList from "../components/CommentsList";
// import AddCommentForm from "../components/AddCommentForm";
// const ArticlesPage = () => {
//   const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

//   const { articleId } = useParams();

//   useEffect(() => {
//     const loadArticleInfo = async () => {
//       const response = await axios.get(`/api/articles/${articleId}`);
//       const newArticleInfo = response.data;
//       // console.log(newArticleInfo);

//       setArticleInfo(newArticleInfo);
//     };
//     loadArticleInfo();
//   }, []);
//   const articles = articles.find((article) => article.name === articleId);

//   const addUpvote = async () => {
//     const response = await axios.put(`/api/articles/${articleId}/upvote`);
//     const updatedArticle = response.data;
//     setArticleInfo(updatedArticle);
//   };
//   if (!articles) {
//     return <NotFoundPage />;
//   }
//   console.log(articleInfo.comments);
//   return (
//     <>
//       <h1>{articles.title}</h1>
//       <div className="upvotes-section">
//         <button onClick={addUpvote}>Upvote</button>
//         <p>This article has {articleInfo.upvotes} upvote(s)</p>
//       </div>
//       {articles.content.map((paragraph, i) => (
//         <p key={i}>{paragraph}</p>
//       ))}
//       <AddCommentForm articleName={articleId} onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)} />
//       <CommentsList comments={articleInfo.comments} />
//     </>
//   );
//   // return (
//   //   <>
//   //     <h1>{article.title}</h1>
//   //     <div className="upvotes-section">
//   //       <button onClick={addUpvote}>Upvote</button>
//   //       <p>This article has {articleInfo.upvotes} upvote(s)</p>
//   //     </div>

//   //     <p>this article has {articleInfo.upvotes} upvotes</p>
//   //     {article.content.map((paragraph, i) => (
//   //       <p key={i}>{paragraph}</p>
//   //     ))}
//   //     <AddCommentForm articleName={articleId} onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)} />
//   //     <CommentsList comments={articleInfo.comments} />
//   //   </>
//   // );
// };

// export default ArticlesPage;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import articles from "./article-content";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
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
        <button onClick={addUpvote}>Upvote</button>
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      <AddCommentForm articleName={articleId} onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)} />
      <CommentsList comments={articleInfo.comments} />
    </>
  );
};

export default ArticlePage;
