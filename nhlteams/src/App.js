import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import "antd/dist/antd.css";

// components
import Landing from "./landing/Index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      teamPlayers: [],
    };
  }
  componentDidMount() {
    this.getTeams();
  }

  /**
   * Get NHL Teams
   * @function
   * @param {Null}
   */
  getTeams = () => {
    axios
      .get("https://statsapi.web.nhl.com/api/v1/teams")
      .then((res) => this.setState({ teams: res.data.teams }));
  };

  /**
   * Get Team Players
   * @function
   * @param {Null}
   */
  getTeamPlayers = (index) => {
    const { teams } = this.state;
    const team = teams[index];
    console.log(team);
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/teams/${team.id}/roster`)
      .then((res) => this.setState({ teamPlayers: res.data.roster }));
  };

  render() {
    const { teams, teamPlayers } = this.state;
    console.log(teams);
    return (
      <div className="App" data-test="component-app">
        <Landing
          teams={teams}
          teamPlayers={teamPlayers}
          getTeamPlayers={this.getTeamPlayers}
        />
      </div>
    );
  }
}

export default App;
