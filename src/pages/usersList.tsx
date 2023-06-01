import Container from "react-bootstrap/Container";
import {
  Col,
  Card,
  Row,
  ListGroup,
  Form,
  Button,
  Pagination,
} from "react-bootstrap";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllUsers } from "../features/users/usersSlice";
import { userCommentUpdated } from "../features/users/usersSlice";
import "./x.css";
import { setUrlPage, getUrlPage } from "../utils/utils";

function UserItem({ user }) {
  const dispatch = useDispatch();
  const {
    stars,
    views,
    project,
    author,
    avatar,
    userUrl,
    projectUrl,
    comment,
  } = user;
  console.log(comment);
  const [cV, setCv] = useState(() => (comment ? comment : ""));
  function saveComment() {
    dispatch(userCommentUpdated({ id: user.id, comment: cV }));
  }
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={avatar} />
          <Card.Body>
            <Card.Title>
              Автор:{" "}
              <a href={userUrl} target="_blank">
                {author}
              </a>
            </Card.Title>
            <Card.Subtitle>
              Название:{" "}
              <a href={projectUrl} target="_blank">
                {project}
              </a>
            </Card.Subtitle>
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
    </>
  );
}

function PogItems(n: number, active: number, changePage: (i: number) => void) {
  // eslint-disable-next-line prefer-const
  let a = new Array(n);
  for (let i = 0; i < n; ++i) {
    a[i] = (
      <Pagination.Item
        onClick={() => changePage(i)}
        key={i}
        active={i === active}
      >
        {i + 1}
      </Pagination.Item>
    );
  }
  return a;
}

function splitUsers(users) {
  return users.reduce((acc, val, i) => {
    // eslint-disable-next-line prefer-const
    let idx = Math.floor(i / 6);
    // eslint-disable-next-line prefer-const
    let page = acc[idx] || (acc[idx] = []);
    page.push(val);

    return acc;
  }, []);
}

export default function UsersList() {
  // max 30 users
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector((state) => state.users.status);
  const [page, setPage] = useState(() => getUrlPage());
  if (usersStatus === "pending" || users.length === 0) {
    return <div>use serach</div>;
  }
  if (usersStatus === "loading" || users.length === 0) {
    return <h1>Loading...</h1>;
  }
  const sU = splitUsers(users);

  function changePage(i: number) {
    setPage(i);
    setUrlPage(i);
  }

  return (
    <Container fluid>
      <Row xs={1} md={2} lg={3} xl={3} xxl={3}>
        {sU[page].map((user) => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </Row>
      <div className="center">
        <Pagination>
          {PogItems(Math.ceil(users.length / 6), page, changePage)}
        </Pagination>
      </div>
    </Container>
  );
}
