import React from "react";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utils";

function CustomLink({ to, children }) {
  const location = useLocation();
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;
  const styles = match ? { fontWeight: "bold", color: `var(--white)` } : {};
  return (
    <li>
      <Link
        style={{ ...styles }}
        to={{
          pathname: to,
          search: location.search,
        }}
      >
        {children}
      </Link>
    </li>
  );
}

function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

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
    <div className="container">
      <Sidebar title="Players" list={names} />
    </div>
  );
};

export default Players;
