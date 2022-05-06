import React from "react";

import Bookings from "./components/Bookings";
import Header from "./components/Header/Header";
import TouristInfoCards from "./components/TouristInfoCards/TouristInfoCards";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCards />
      <Bookings />
      <Footer />
    </div>
  );
};

export default App;
