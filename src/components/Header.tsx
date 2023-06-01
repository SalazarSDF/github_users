import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
//import { useNavigate } from "react-router-dom";
import { getQuery, setQuery } from "../utils/utils";

function SearchField() {
  const [iV, setIv] = useState<string>(() => getQuery());
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.users.status);
  const query = getQuery();
  if (userStatus === "idle" && query !== "") {
    dispatch(fetchUsers(iV));
  }

  function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    console.log(iV);
    if (iV && iV.length > 2) {
      dispatch(fetchUsers(iV));
      setQuery(iV);
    }
  }
  return (
    <Form>
      <Col>
        <InputGroup className="mb-2">
          <Form.Control
            placeholder="Начните вводить текст для поиска (не менее трех символов)"
            aria-describedby="search"
            value={iV}
            onChange={(e) => setIv(e.target.value)}
          />
          <Button variant="primary" onClick={(e) => handleSearch(e)}>
            Search
          </Button>
        </InputGroup>
      </Col>
    </Form>
  );
}

export default function Header() {
  return <SearchField />;
}
