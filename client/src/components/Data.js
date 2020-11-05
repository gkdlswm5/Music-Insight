import React from "react";
import { Container } from "react-bootstrap";

function Data({ displayData }) {
  //console logs array
  // console.log(displayData);

  // const urlLink = () => {
  //   {
  //     data.external_urls.spotify;
  //   }
  // };

  const listItems = displayData.map((data) => {
    console.log(data);
    console.log(data.artists);
    console.log(data.artists[0]);
    return (
      <>
        <Container>
          <ul key={data.external_urls.uri}>
            {data.name} - {data.artists[0].name}
          </ul>
        </Container>
        <Container>
          <ul key={data.external_urls.uri}></ul>
        </Container>
        <br />
      </>
    );
  });

  return (
    <Container
      style={{
        paddingTop: "20px",
        maxWidth: "680px",
      }}>
      <ul>{listItems}</ul>
    </Container>
  );
}

export default Data;
