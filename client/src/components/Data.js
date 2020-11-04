import React from "react";
import { Container } from "react-bootstrap";

function Data({ displayData }) {
  //console logs array
  // console.log(displayData);

  const listItems = displayData.map((data) => {
    // console.log(data);
    return <li key={data.external_urls.spotify}>{data.name}</li>;
  });

  return (
    <Container
      style={{
        paddingTop: "20px",
        maxWidth: "500px",
      }}>
      <ul>{listItems}</ul>
    </Container>
  );
}

export default Data;
