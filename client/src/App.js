import React, { useState, useEffect } from "react";
import InputTab from "./components/InputTab";
import Header from "./components/Header";
import Data from "./components/Data";
import API from "./utils/API";
import querystring from "query-string";

function App() {
  //value being looked up
  useEffect(() => {});

  let parsed = querystring.parse(window.location.search);
  let token = parsed.code;
  console.log(parsed);
  console.log(token);

  const handleLogin = () => {
    console.log("working");
    API.token().then((data) => console.log(data));
    // window.location = "http://localhost:3001/token";
    // fetch("http://localhost:3000/login").then((data) => console.log(data));
  };

  const getToken = () => {
    // window.location = "http://localhost:3001/authorize";
    // fetch("http://localhost:3001/refresh").then((data) => console.log(data));
  };

  const [data, setData] = useState({
    search: "",
    searchValue: "",
  });
  const [searchBy, setSearchBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    API.login();
    // API.test();
    // console.log(searchBy);
  };

  const handleChange = (e) => {
    setData((data.search = e.target.value));
    console.log(data);
  };

  const handleNewRelease = (e) => {
    e.preventDefault();
    API.getAllNewReleases().then((data) => console.log(data));
  };

  //request param (song / artist / album )
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
        handleNewRelease={handleNewRelease}
        handleLogin={handleLogin}
        getToken={getToken}
        // handleSelect={handleSelect}
        // dropdownValue={dropdownValue}
      />
      <Data></Data>
    </div>
  );
}

export default App;
