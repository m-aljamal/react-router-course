import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
const Teams = () => {
  const { response: teamNames, loading: loadingTeamNames } = useTeamNames();

  if (loadingTeamNames) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container two-column">
      <Sidebar title="Teams" list={teamNames} />
      <Outlet />
    </div>
  );
};

export default Teams;
