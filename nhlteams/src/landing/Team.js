import React, { Component } from "react";
import { Table, Modal, Button } from "antd";
import { Flag } from "country-flags-react";
import axios from "axios";
import { getName } from "country-list";

export default class Team extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    playerInfo: {},
    visible: false,
  };

  //   modal
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  playerModal = (playerInfo) => {
    return (
      <Modal
        title={`Nationality of ${playerInfo.name}`}
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button type="primary" key="back" onClick={this.handleOk}>
            OK
          </Button>,
        ]}
      >
        <div className="text-center">
          <span className="modal-spam">
            {playerInfo &&
              playerInfo.nationality &&
              getName(playerInfo.nationality.substring(0, 2))}
          </span>
          <Flag
            countryCode={
              playerInfo &&
              playerInfo.nationality &&
              playerInfo.nationality.substring(0, 2).toUpperCase()
            }
            size={25}
          />
        </div>
      </Modal>
    );
  };
  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  reformatData = (arr) => {
    let players = [];
    if (arr.length > 0) {
      arr.forEach((item, index) => {
        const data = {
          key: index,
          jerseyNumber: item.jerseyNumber,
          fullName: item.person.fullName,
          id: item.person.id,
          position: item.position.name,
        };
        players.push(data);
      });
    }
    return players;
  };

  getPlayer = (player) => {
    axios
      .get(`https://statsapi.web.nhl.com/api/v1/people/${player.id}`)
      .then((res) => {
        const player = res.data.people[0];
        const playerInfo = {
          name: player.fullName,
          nationality: player.nationality,
        };
        this.setState({ playerInfo }, () => {
          this.showModal();
        });
      });
  };

  getPostions = (players) => {
    let positions = [];
    let thePositions = [];
    if (players.length > 0) {
      players.forEach((player) => {
        positions.push(player.position.name);
      });
    }
    const uniquePositions = Array.from(new Set(positions));
    uniquePositions.forEach((position) => {
      const data = {
        text: position,
        value: position,
      };
      thePositions.push(data);
    });
    return thePositions;
  };

  render() {
    let { sortedInfo, filteredInfo, playerInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const { teamPlayers } = this.props;
    const positions = this.getPostions(teamPlayers);
    const columns = [
      {
        title: "Number",
        dataIndex: "jerseyNumber",
        key: "jerseyNumber",
        sorter: (a, b) => a.jerseyNumber - b.jerseyNumber,
        sortOrder: sortedInfo.columnKey === "jerseyNumber" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Name",
        dataIndex: "fullName",
        key: "fullName",
        sorter: (a, b) => a.fullName.localeCompare(b.fullName),
        sortOrder: sortedInfo.columnKey === "fullName" && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: "Position",
        dataIndex: "position",
        key: "position",
        filters: positions,
        filteredValue: filteredInfo.position || null,
        onFilter: (value, record) => record.position.includes(value),
      },
    ];
    return (
      <div className="container" data-test="component-test">
        <div className="text-center">
          <h1>
            This SPA was built using the{" "}
            <a href="https://github.com/dword4/nhlapi">NHLAPI</a> and its
            available on Github
          </h1>
          {teamPlayers.length <= 0 && <h2>Select a team from the menu</h2>}
        </div>
        <Table
          columns={columns}
          dataSource={this.reformatData(teamPlayers)}
          onChange={this.handleChange}
          onRow={(r) => ({
            onClick: () => this.getPlayer(r),
          })}
        />
        {this.playerModal(playerInfo)}
      </div>
    );
  }
}
