import React from "react";

import Bookings from "./components/Bookings";
import Header from "./components/Header/Header";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Bookings />
    </div>
  );
};

export default App;
