import React from "react";
import { Link, useParams } from "react-router-dom";
import useTeam from "../hooks/useTeam";
import Loading from "./Loading";
import TeamLogo from "./TeamLogo";
const Team = () => {
  const { teamId } = useParams();
  const { response: team, loading } = useTeam(teamId);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="panel">
      <TeamLogo id={teamId} className="center" />
      <h1 className="medium-header">{team.name}</h1>
      <ul className="info-list row">
        <li>
          Established<div>{team.established}</div>
        </li>
        <li>
          Manager<div>{team.manager}</div>
        </li>
        <li>
          Coach<div>{team.coach}</div>
        </li>
        <li>
          Record
          <div>
            {team.wins}-{team.losses}
          </div>
        </li>
      </ul>
      <Link className="center btn-main" to={`/${teamId}`}>
        {team.name} Team Page
      </Link>
    </div>
  );
};

export default Team;
