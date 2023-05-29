import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchField() {
  const [iV, setIv] = useState<string>("");
  const placeholder =
    "Начните вводить текст для поиска (не менее трех символов)";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    console.log(iV);
    if (iV && iV.length > 2) {
      dispatch(fetchUsers(iV));
      navigate(`?${iV}`);
    }
  }
  return (
    <Form>
      <Col>
        <InputGroup className="mb-2">
          <Form.Control
            placeholder={placeholder}
            id="search"
            aria-describedby="search"
            value={iV}
            onChange={(e) => setIv(e.target.value)}
          />
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleSearch(e)}
          >
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
