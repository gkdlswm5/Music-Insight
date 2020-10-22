import React, { useState, useEffect } from "react";
import InputTab from "./components/InputTab";
import Header from "./components/Header";
import Data from "./components/Data";
import API from "./utils/API";

function App() {
  //value being looked up
  const [data, setData] = useState({
    search: "",
    searchValue: "",
  });
  const [searchBy, setSearchBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    API.userAuthorize().then((data) => console.log(data));
    // console.log(searchBy);
  };

  const handleChange = (e) => {
    setData((data.search = e.target.value));
    console.log(data);
  };

  // const handleSelect = (e) => {
  //   // e.preventDefault();
  //   console.log(e);
  //   // setSearchBy(e.target.value);
  //   // console.log(searchBy);
  // };

  const loadNewPlaylist = () => {
    API.getAllNewReleases().then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <Header />
      <InputTab
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        // handleSelect={handleSelect}
        // dropdownValue={dropdownValue}
      />
      <Data></Data>
    </div>
  );
}

export default App;
