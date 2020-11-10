import React from "react";
import { Container } from "react-bootstrap";

function Data({ displayData, track }) {
  // console.log(displayData);
  // console.log(track);

  //?? SONG INFO
  var songInfo = [];
  for (const property in track) {
    songInfo.push(property);
    // console.log(songInfo);
  }

  //INITIALIZING CHART
  //   var myBarChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: track,
  //     options: options
  // });

  const handleClick = (e) => {
    // console.log(e.target);
    var element = e.target;
    console.log(element.getAttribute("value"));

    var redirectLink = element.getAttribute("value");

    window.open(redirectLink);
    // console.log(e.target.value.bind(this));

    // window.open(e.target.value);
    // var url = e.this.link;
    // console.log(url);
    // window.open(link);
  };

  const listItems = displayData.map((data) => {
    console.log(data);
    // console.log(data.artists);
    // console.log(data.artists[0]);

    var artistArray = [];
    var artists = "";
    var artistName = data.artists;

    //returns spotify link
    console.log(data.external_urls.spotify);

    return (
      <>
        <Container>
          <ul key={data.external_urls.uri}>
            {data.name} - {data.artists[0].name}
          </ul>
        </Container>
        <Container>
          <ul
            onClick={handleClick}
            key={data.external_urls.uri}
            value={data.external_urls.spotify}>
            Link
          </ul>
        </Container>
        <br />
      </>
    );
  });
  //artists now has values of artists
  // artistArray.push(artistName);
  // artistArray.pop();

  // console.log(artistArray);
  // console.log(artistArray.length);

  // for multiple artists
  // for (var i = 0; i < artistArray.length; i++) {
  //   console.log(artistArray[i]);
  //   console.log(artists);
  // }

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
