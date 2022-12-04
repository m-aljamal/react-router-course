import React from "react";
import { useParams, Outlet } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import Sidebar from "./Sidebar";
const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container two-column">
      <Sidebar
        title="Articles"
        list={articles.map((article) => article.title)}
      />
      <Outlet />
    </div>
  );
};

export default Articles;
