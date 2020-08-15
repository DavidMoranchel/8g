import React, { Component } from "react";

// Components
import Input from "../../../../components/Input";

// CSS
import "./UserForm.css";

class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      age: 0,
      // hobbies: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(name, value) {
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, age } = this.state;
    this.props.callback(firstName, lastName, age);
    this.setState({
      firstName: "",
      lastName: "",
      age: 0,
    });
  }

  render() {
    const { firstName, lastName, age } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          First name:
          <Input
            value={firstName}
            name="firstName"
            callback={this.handleInputChange}
          />
          Last name:
          <Input
            value={lastName}
            name="lastName"
            callback={this.handleInputChange}
          />
          Age:
          <Input
            type="number"
            value={age}
            name="age"
            callback={this.handleInputChange}
          />
          <button type="submit">Crear Usuario</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
