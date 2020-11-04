import React, { useState, useEffect } from "react";
import InputTab from "./components/InputTab";
import Header from "./components/Header";
import Data from "./components/Data";
import API from "./utils/API";
import querystring from "query-string";

function App() {
  //value being looked up
  useEffect(() => {});

  // let parsed = querystring.parse(window.location.search);
  // let token = parsed.code;
  // console.log(parsed);
  // console.log(token);

  const [searchBy, setSearchBy] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [displayData, setDisplayData] = useState([]);

  //sets searchinput value as the hook
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
  };

  const handleSubmit = () => {
    API.token();
    //API call by searchValue
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
        let cleansedData = data.data.body.items;
        console.log(cleansedData);
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
      <Data displayData={displayData}></Data>
    </div>
  );
}

export default App;
