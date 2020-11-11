import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import * as d3 from "d3";

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

  d3.select(".graph")
    .selectAll("p")
    .data([1, 2, 3])
    .enter()
    .append("p")
    .text((data) => data);

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
      <br />
      <h5>Visualized</h5>
      <div className="graph"></div>
    </Container>
  );
}

export default Info;
