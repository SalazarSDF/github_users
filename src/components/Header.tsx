import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { useState } from "react";

function SearchField() {
  const [iV, setIv] = useState<string>("");
  const placeholder =
    "Начните вводить текст для поиска (не менее трех символов)";

  function handleSearch(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
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
