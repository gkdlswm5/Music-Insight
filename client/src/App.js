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

  const placeholder = () => {
    API.token().then((data) => console.log(data));
    console.log("working");
  };

  const test = () => {
    API.token().then((data) => {
      console.log(data);
      API.test().then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <div>
      <Header />
      <InputTab
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        placeholder={placeholder}
        test={test}
      />
      <Data></Data>
    </div>
  );
}

export default App;
