import React from "react";
import moment from "moment";
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
        </tr>
      </thead>
      <tbody>
        {props.results.map(data => {
          const checkIn = moment(data.checkInDate);
          const checkOut = moment(data.checkOutDate);
          const totalNigths = checkOut.diff(checkIn, "days");
          return (
            <tr key={data.id}>
              <th>{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firstName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkOutDate}</td>
              <td>{totalNigths}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
