import React, { useState, useEffect } from "react";
import InputTab from "./components/InputTab";
import Header from "./components/Header";
import Data from "./components/Data";
import Info from "./components/Info";
import API from "./utils/API";
import querystring from "query-string";

function App() {
  useEffect(() => {});

  // let parsed = querystring.parse(window.location.search);
  // let token = parsed.code;
  // console.log(parsed);
  // console.log(token);

  //INPUT
  const [searchBy, setSearchBy] = useState("");
  const [searchValue, setSearchValue] = useState("");

  //DATA
  const [displayData, setDisplayData] = useState([]);
  const [musicData, setMusicData] = useState([]);
  const [segments, setSegments] = useState([]);
  const [bars, setBars] = useState([]);
  const [beats, setBeats] = useState([]);
  const [sections, setSections] = useState([]);
  const [track, setTrack] = useState([]);

  //sets searchinput value as the hook
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSubmit = () => {
    API.token().then(() => {
      // API.searchBySong(searchValue).then((data) => console.log(data))
      API.searchBySong(searchValue).then((data) => {
        console.log(data);
        console.log("Searching ...");
        let cleansedData = data.data.body.tracks.items;
        setDisplayData(cleansedData);
      });
    });
  };

  //SONGANALYSIS PATH (TEST)
  const placeholder = () => {
    API.token().then(() => {
      API.songAnalysis("42nkVBjWYVhiijbof5zySm").then((data) => {
        // console.log(data);
        // console.log(data.data.body.segments);
        setTrack(data.data.body.track);
        setMusicData(data);
        setSegments(data.data.body.segments);
        setSections(data.data.body.sections);
      });
    });
    console.log("Analysis path");
  };

  const test = () => {
    API.token().then((data) => {
      console.log(data);
      API.test().then((data) => {
        // console.log(data);
        let cleansedData = data.data.body.items;
        setDisplayData(cleansedData);
      });
    });
  };

  return (
    <div>
      <Header />
      <InputTab
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder={placeholder}
        test={test}
      />
      <Data displayData={displayData} track={track} />
      <Info
        musicData={musicData}
        track={track}
        segments={segments}
        sections={sections}
      />
    </div>
  );
}

export default App;
