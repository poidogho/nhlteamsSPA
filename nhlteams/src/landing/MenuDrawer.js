import React, { useState } from "react";
import Logos from "../Logos";

/**
 * Get NHL Teams
 * @function
 * @param {team array}
 */
const MenuDrawer = (props) => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const { teams } = props;

  const openNav = () => {
    setOpenNavbar(true);
  };

  /* Set the width of the side navigation to 0 */
  const closeNav = (e) => {
    e.preventDefault();
    setOpenNavbar(false);
  };

  return (
    <div data-test="component-menu-drawer">
      <div
        id="mySidenav"
        className="sidenav"
        style={{ width: openNavbar ? "240px" : "0px" }}
      >
        <a href="" className="closebtn" onClick={closeNav}>
          &times;
        </a>
        {teams.length <= 0 ? (
          <h3>Error loading teams</h3>
        ) : (
          <div style={{ color: "white" }} className="text-center">
            <h2 style={{ color: "white" }}>
              <b>NHL Teams</b>
            </h2>
            <ul>
              {teams.map((team, index) => (
                <li
                  key={index}
                  className="menu-items"
                  onClick={() => props.getTeamPlayers(index)}
                >
                  <b>{team.name}</b>
                  <Logos logo={team.abbreviation} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="nav-menu">
        <span onClick={openNav}>
          <i className="fas fa-bars fa-3x"></i>
        </span>
      </div>
    </div>
  );
};

export default MenuDrawer;
