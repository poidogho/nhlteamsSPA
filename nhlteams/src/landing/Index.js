import React from "react";
import MenuDrawer from "./MenuDrawer";
import Team from "./Team";

const Index = ({ teams, getTeamPlayers, teamPlayers }) => {
  return (
    <div>
      <MenuDrawer teams={teams} getTeamPlayers={getTeamPlayers} />
      <Team teamPlayers={teamPlayers} />
    </div>
  );
};

export default Index;
