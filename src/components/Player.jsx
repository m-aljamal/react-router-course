import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";
import Loading from "./Loading";

const Player = () => {
  const { playerId } = useParams();

  const { response: player, loading } = usePlayer(playerId);

  let body;
  if (loading) {
    body = <Loading />;
  } else if (player === null) {
    body = <Navigate to="/players" />;
  } else {
    body = (
      <div>
        <img
          className="avatar"
          src={`${player.avatar}`}
          alt={`${player.name}'s avatar`}
        />
        <h1 className="medium-header">{player.name}</h1>
        <h3 className="header">#{player.number}</h3>
        <div className="row">
          <ul className="info-list" style={{ marginRight: 80 }}>
            <li>
              Team
              <div>
                <Link to={`/${player.teamId}`}>
                  {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
                </Link>
              </div>
            </li>
            <li>
              Position<div>{player.position}</div>
            </li>
            <li>
              PPG<div>{player.ppg}</div>
            </li>
          </ul>
          <ul className="info-list">
            <li>
              APG<div>{player.apg}</div>
            </li>
            <li>
              SPG<div>{player.spg}</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  if (loading) {
    return <Loading />;
  }

  if (!player) {
    return <div>Player not found</div>;
  }
  return <div className="panel">{body}</div>;
};

export default Player;
