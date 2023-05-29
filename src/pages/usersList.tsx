import Container from "react-bootstrap/Container";
import { Col, Card, Row, ListGroup, Form, Button } from "react-bootstrap";
import "./x.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { selectAllUsers } from "../features/users/usersSlice";
import { userCommentUpdated } from "../features/users/usersSlice";

//stars: stargazers_count
//views: watchers
//name project: name
// author: owner.login

function UserItem({ user }) {
  const dispatch = useDispatch();
  const [cV, setCv] = useState("");
  const { stars, views, project, author, avatar } = user;
  function saveComment() {
    dispatch(userCommentUpdated({ id: user.id, comment: cV }));
  }
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>Автор: {author} </Card.Title>
          <Card.Subtitle>Название: {project}</Card.Subtitle>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Stars: {stars}</ListGroup.Item>
          <ListGroup.Item>Views: {views}</ListGroup.Item>
        </ListGroup>

        <Card.Text>
          <Form.Label htmlFor="basic-url">Комментарий к проекту: </Form.Label>
          <Form.Control
            id="basic-url"
            as="textarea"
            aria-label="comment to project"
            placeholder="Комментарий "
            value={cV}
            onChange={(e) => setCv(e.target.value)}
          />
        </Card.Text>

        <Button onClick={saveComment} variant="outline-primary">
          Сохранить Комментарий
        </Button>
      </Card>
    </Col>
  );
}

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector((state) => state.users.status);
  useEffect(() => {
    if (usersStatus === "idle") {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);
  if (usersStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    <Container fluid>
      <Row xs={1} md={3}>
        {users.map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </Row>
    </Container>
  );
}
