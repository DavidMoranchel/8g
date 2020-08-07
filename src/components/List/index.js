import React, { Component } from "react";

// CSS
import "./List.css";
import { Container, Col, Row, ListGroupItem, ListGroup } from "reactstrap";

const elements = [{ text: "Text 1" }, { text: "dinamic" }, { text: "Text 3" }];

class List extends Component {
  render() {
    const UIElements = elements.map(({ text }, index) => {
      const upperText = text.toUpperCase();
      return (
        <ListGroupItem key={index} className="List-item">
          {upperText}
        </ListGroupItem>
      );
    });
    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {UIElements}
              {/* <ListGroupItem className="List-item">Text 1</ListGroupItem>
              <ListGroupItem className="List-item">Text 2</ListGroupItem>
              <ListGroupItem className="List-item">Text 3</ListGroupItem> */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default List;

/* Reto

  Hacer un componente que funja como el layout de varios posts (como un blog)
  reutilizando el componente Post (/src/components/Post) que hicimos 
  en clases anteriores,

  IMPORTANTE: Cada quien debe hacer su array de objetos

*/
