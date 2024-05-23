import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

const App = () => {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("us");
  const [india, setIndia] = useState("in");
  return (
    <>
      <Navbar setCategory={setCategory} setCountry={setCountry} />
      <NewsBoard category={category} country={country} />
      <NewsBoard category={category} country={india} />
    </>
  );
};

export default App;
