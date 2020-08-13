import React, { Component } from "react";

// Custom components
import UserForm from "./components/UserForm";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.handleForm = this.handleForm.bind(this);
  }

  componentDidMount() {
    console.log("Componente montado correctamente");
    fetch("https://reactsessions-ac545.firebaseio.com/.json")
      .then((response) => {
        return response.json();
      })
      .then(({ users }) => {
        let parsedUsers = [];
        for (let key in users) {
          let user = users[key];
          user["key"] = key;
          parsedUsers.push(user);
        }
        if (parsedUsers) {
          this.setState({
            users: parsedUsers,
          });
        }
      });
  }

  handleForm(firstName, lastName, age) {
    fetch("https://reactsessions-ac545.firebaseio.com/users.json", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify({
        firstName,
        lastName,
        age,
      }),
    })
      .then((response) => response.json())
      .then(({ name }) => {
        const { users } = this.state;
        const newUsers = [...users, { firstName, lastName, key: name }];
        this.setState({
          users: newUsers,
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
        <UserForm callback={this.handleForm} />
      </div>
    );
  }
}
export default Users;

// POST
// var user = {
//   firstName: "Daniel",
//   lastName: "Heredia",
//   age: 29,
// };

// fetch("https://reactsessions-ac545.firebaseio.com/users.json", {
//   method: "POST",
//   mode: "cors",
//   body: JSON.stringify(user)
// }).then(response => response.json()).then(data => console.log(data));

// PUT
// var user = {
//   firstName: "Otra cosa",
// };

// fetch("https://reactsessions-ac545.firebaseio.com/users/-ME_QL6hj3Fp3KeUWv4S.json", {
//   method: "PUT",
//   mode: "cors",
//   body: JSON.stringify(user)
// }).then(response => response.json()).then(data => console.log(data));

// PATCH
