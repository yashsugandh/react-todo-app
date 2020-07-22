import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="main-nav">
      <ul>
      <li>
          {/* NavLink to automatically identify whether the link is active */}
          <NavLink to="/add" activeClassName="active" exact>
            Add
          </NavLink>
        </li>
        <li>
          {/* NavLink to automatically identify whether the link is active */}
          <NavLink to="/" activeClassName="active" exact>
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName="active" exact>
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="active" exact>
            Completed
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;