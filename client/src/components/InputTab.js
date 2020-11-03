import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Container,
} from "react-bootstrap";

function InputTab({
  handleSubmit,
  handleChange,
  handleSelect,
  placeholder,
  test,
}) {
  return (
    <Container
      style={{
        paddingTop: "100px",
        maxWidth: "500px",
      }}>
      <InputGroup name="searchValue" className="mb-3" onChange={handleChange}>
        <DropdownButton
          onSelect={handleSelect}
          name="search"
          variant="outline-secondary"
          title="Search By ..."
          id="input-group-dropdown-1">
          <Dropdown.Item value="song">Search by Songname</Dropdown.Item>
          <Dropdown.Item value="artist">Search by Artist</Dropdown.Item>
          <Dropdown.Item value="album">Search by Album</Dropdown.Item>
        </DropdownButton>
        <FormControl aria-describedby="basic-addon1" />
      </InputGroup>

      <Button variant="outline-secondary" onClick={handleSubmit}>
        Search
      </Button>
      <Button variant="outline-secondary" onClick={placeholder}>
        Placeholder
      </Button>
      <Button variant="outline-secondary" onClick={test}>
        Test
      </Button>
    </Container>
  );
}

export default InputTab;
