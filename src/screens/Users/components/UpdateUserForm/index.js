import React, { Component } from "react";

// Components
import Input from "../../../../components/Input";

// CSS
// import "./UserForm.css";

class UpdateUserForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(name, value) {
    this.props.inputCallback(name, value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.submitCallback();
  }

  render() {
    const { firstName, lastName, age } = this.props.data;
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
          <button type="submit">Editar Usuario</button>
        </form>
      </div>
    );
  }
}

export default UpdateUserForm;
