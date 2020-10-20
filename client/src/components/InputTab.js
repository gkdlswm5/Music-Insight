import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Container,
} from "react-bootstrap";

function InputTab() {
  return (
    <Container
      style={{
        paddingTop: "100px",
        maxWidth: "500px",
      }}>
      <InputGroup className="mb-3">
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          title="Search By ..."
          id="input-group-dropdown-1">
          <Dropdown.Item href="#">Search by Songname</Dropdown.Item>
          <Dropdown.Item href="#">Search by Artist</Dropdown.Item>
          <Dropdown.Item href="#">Search by Album</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>

      <Button variant="outline-secondary">Search</Button>
    </Container>
  );
}

export default InputTab;
