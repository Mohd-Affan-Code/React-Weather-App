import React, { createContext, useState } from "react";
import "./App.css";
import ChildA from "./Component/ChildA";

let UserContext = createContext();
const App = () => {
  return (
    <>
      <div className="container">
        <ChildA />
      </div>
    </>
  );
};

export default App;
