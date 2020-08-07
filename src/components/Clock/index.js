import React, { Component } from "react";

import { Badge, Container, Button } from "reactstrap";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: "danger",
      counter: 1,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  handleClick() {
    console.log("Me clickearon desde un metodo!!!");
    console.log(this);
    let { counter } = this.state;
    counter = counter + 1;
    this.setState({
      counter,
    });
  }

  render() {
    // aqui pueden ejecutar cualquier codigo JS que quieran

    return (
      <>
        <h1>
          <Badge color={this.state.color}>{this.state.date}</Badge>
        </h1>
        <Container>
          <p>
            <Badge color="primary">{this.state.counter}</Badge>
          </p>
          <Button onClick={this.handleClick}>Add</Button>
        </Container>
      </>
    );
  }
}

export default Clock;
