import React from "react";
import {
  Badge,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Container,
} from "reactstrap";

function Post({ title, subtitle, content, image, tags }) {
  const _renderTags = tags
    .split(",")
    .map((tag) => <Badge color="secondary">{tag}</Badge>);

  return (
    <Card>
      <CardImg top width="100%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{content}</CardText>
        <Container>{_renderTags}</Container>
      </CardBody>
    </Card>
  );
}

export default Post;
