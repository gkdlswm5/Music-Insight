import React from "react";
import { Container } from "react-bootstrap";

function Data({ displayData }) {
  console.log(displayData);
  const listItems = displayData.map((data) => {
    console.log(data);
    // console.log(data.artists);
    // console.log(data.artists[0]);

    var artistArray = [];
    var artists = "";
    var artistName = data.artists;

    //artists now has values of artists
    artistArray.push(artistName);
    // artistArray.pop();

    console.log(artistArray);
    // console.log(artistArray.length);

    for (var i = 0; i < artistArray.length; i++) {
      console.log(artistArray[i]);
      console.log(artists);
    }

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
