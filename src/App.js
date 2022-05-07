import React from "react";

import Bookings from "./components/Bookings";
import Heading from "./components/Heading/Heading";
import TouristInfoCards from "./components/TouristInfoCards/TouristInfoCards";
import Footer from "./components/Footer/Footer";
import "./App.css";
const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Footer address={address} />
    </div>
  );
};

export default App;
