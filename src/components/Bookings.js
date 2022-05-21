import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResult/SearchResult";
// import FakeBookings from "../data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [initialBookings, setInitialBooking] = useState([]);
  const API_URL = "https://cyf-react.glitch.me";

  const search = searchVal => {
    if (searchVal.length === 0) {
      setBookings(initialBookings);
      return;
    }
    console.info("TO DO!", searchVal);
    const filteredBookings = bookings.filter(booking => {
      return (
        booking.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
        booking.surname.toLowerCase().includes(searchVal.toLowerCase())
      );
    });
    setBookings(filteredBookings);
  };
  useEffect(() => {
    console.log("hola");

    fetch(API_URL)
      .then(data => data.json())
      .then(json => {
        setBookings(json);
        setInitialBooking(json);
      });
  }, []);
  console.log(setBookings);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
