import React from "react";
import { useLocation, useSearchParams, Outlet } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import Sidebar from "./Sidebar";

const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const [teamId, setTeam] = React.useState(searchParams.get("teamId"));
  const { loading: loadingNames, response: names } = usePlayerNames(teamId);
  React.useEffect(() => {
    if (location.search === "") {
      searchParams.delete("teamId");
      setTeam(null);
    } else {
      setTeam(searchParams.get("teamId"));
    }
  }, [searchParams, location.search, teamId]);

  if (loadingNames) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={names} />
      <Outlet />
    </div>
  );
};

export default Players;
