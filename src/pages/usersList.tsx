import Container from "react-bootstrap/Container";
import { Col, Card, Row, ListGroup, InputGroup, Form } from "react-bootstrap";
import "./x.css";

function UserItem() {
  return (
    <Col>
      <Card>
        <Card.Img
          variant="top"
          src="https://avatars.githubusercontent.com/u/79121367?v=4"
        />
        <Card.Body>
          <Card.Title>Автор: </Card.Title>
          <Card.Subtitle>Название: </Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Stars: 3</ListGroup.Item>
          <ListGroup.Item>Views: 20</ListGroup.Item>
        </ListGroup>

        <Form.Label htmlFor="basic-url">Комментарий к проекту: </Form.Label>
        <InputGroup>
          <Form.Control
            id="basic-url"
            as="textarea"
            aria-label="With textarea"
            placeholder="Комментарий "
          />
        </InputGroup>
      </Card>
    </Col>
  );
}

export default function UsersList() {
  return (
    <Container fluid>
      <Row xs={1} md={3}>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </Row>
    </Container>
  );
}
