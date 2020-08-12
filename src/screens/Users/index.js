import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("Componente montado correctamente");
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          users,
        });
      });
  }

  render() {
    const { users } = this.state;
    const UIUsers = users.map(({ firstName, lastName }, index) => (
      <li key={index}>
        {firstName} {lastName}
      </li>
    ));

    return (
      <div className="Container">
        {UIUsers.length ? null : <p>No hay usuarios</p>}
        <ul>{UIUsers}</ul>
      </div>
    );
  }
}
export default Users;
