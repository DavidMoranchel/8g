import React, { Component } from "react";

// Custom components
import UserForm from "./components/UserForm";
import UpdateUserForm from "./components/UpdateUserForm";

// CSS
import "./Users.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      updateUser: {},
    };
    this.handleForm = this.handleForm.bind(this);
    this.handlerInputUpdateForm = this.handlerInputUpdateForm.bind(this);
    this.handlerSubmitUpdateForm = this.handlerSubmitUpdateForm.bind(this);
  }

  componentDidMount() {
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

  handlerClickEditItem(key) {
    const { users } = this.state;
    const filteredUser = users.filter(({ key: userKey }) => key === userKey);
    this.setState({
      updateUser: filteredUser[0],
    });
  }

  handlerInputUpdateForm(name, value) {
    const { updateUser } = this.state;
    let newUser = updateUser;
    newUser[name] = value;
    this.setState({
      updateUser: newUser,
    });
  }

  handlerSubmitUpdateForm() {
    const { updateUser } = this.state;
    fetch(
      `https://reactsessions-ac545.firebaseio.com/users/${updateUser.key}.json`,
      {
        method: "PATCH",
        mode: "cors",
        body: JSON.stringify({
          firstName: updateUser.firstName,
          lastName: updateUser.lastName,
          age: updateUser.age,
        }),
      }
    )
      .then((response) => response.json())
      .then(({ name }) => {
        const { users } = this.state;
        // const newUsers = [...users, { firstName, lastName, key: name }];
        const newUsers = users.map((user) => {
          let _updatedUser = user;
          if (user.key === updateUser.key) {
            _updatedUser = updateUser;
          }
          return _updatedUser;
        });
        this.setState({
          users: newUsers,
          updateUser: {},
        });
      });
  }

  render() {
    const { users, updateUser } = this.state;
    const UIUsers = users.map(({ firstName, lastName, key }) => (
      <li key={key}>
        <div>
          {firstName} {lastName}
          <button onClick={(e) => this.handlerClickEditItem(key)}>Edit</button>
          <button>Delete</button>
        </div>
      </li>
    ));
    return (
      <div className="Container">
        <div>
          {Object.keys(updateUser).length ? (
            <UpdateUserForm
              data={updateUser}
              inputCallback={this.handlerInputUpdateForm}
              submitCallback={this.handlerSubmitUpdateForm}
            />
          ) : (
            <UserForm callback={this.handleForm} />
          )}
        </div>
        <div>
          {UIUsers.length ? null : <p>No hay usuarios</p>}
          <ul className="list">{UIUsers}</ul>
        </div>
      </div>
    );
  }
}
export default Users;
