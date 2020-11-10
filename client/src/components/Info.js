import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Info({ musicData, track, segments, sections }) {
  console.log(musicData);
  console.log(segments);
  console.log(sections);
  console.log(track);

  const toMinute = (time) => {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time - minutes * 60);

    return `${minutes} minutes and ${seconds} seconds`;
  };

  var timeConvert = toMinute(track.duration);

  // console.log(musicData.data.body);
  // console.log(musicData.data.body.segments);

  segments.forEach((element, index, array) => {
    // console.log(element.x);
    // console.log(index);
    // console.log(array);
  });

  //INITIALIZING CHART
  //   var myBarChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: track,
  //     options: options
  // });

  //   for (var propoert in musicData)
  return (
    <Container
      style={{
        paddingTop: "20px",
        maxWidth: "600px",
      }}>
      <h5>Song information</h5>
      <div>Song Length: {timeConvert}</div>
      <br />
      <div>Tempo: {track.tempo}</div>
      <br />
      <div>Key: CHANGE INTO NOTE {track.key}</div>
    </Container>
  );
}

export default Info;
