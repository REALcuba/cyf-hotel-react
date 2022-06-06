import React from "react";
import Row from "../Row/Row";

const SearchResult = props => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="row">ID</th>
          <th scope="row">Title</th>
          <th scope="row">FirstName</th>
          <th scope="row">Surname</th>
          <th scope="row">Email</th>
          <th scope="row">Room Id</th>
          <th scope="row">Check in Date</th>
          <th scope="row">Check out Date</th>
          <th scope="row">Nights</th>
          <th scope="row">Show Profile</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(data => {
          return <Row data={data} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
