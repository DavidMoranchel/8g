import React, { Component } from "react";

// CSS
import "./SwitchExample.css";
import { Container, Col, Row, Badge, Button } from "reactstrap";

class SwitchExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.handleClickSwitch = this.handleClickSwitch.bind(this);
  }

  handleClickSwitch() {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    const color = active ? "primary" : "secondary";

    return (
      <>
        <Container>
          <Row>
            <Col lg={1}>
              <h1>
                <Badge color={color}>Holi</Badge>
              </h1>
              <Button color="success" onClick={this.handleClickSwitch}>
                Switch color!
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SwitchExample;
