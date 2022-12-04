import React from "react";
import { useParams } from "react-router-dom";
import useArticle from "../hooks/useArticle";

const Article = () => {
  const { teamId, articleId } = useParams();
  const { response: article, loading } = useArticle(teamId, articleId);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div className="panel"></div>;
};

export default Article;
