import React from "react";
import { useLocation, Link } from "react-router-dom";
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

export default Sidebar;
