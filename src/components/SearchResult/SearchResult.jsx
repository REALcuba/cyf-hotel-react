import React from "react";

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
        </tr>
      </thead>
      <tbody>
        {props.results.map(data => {
          return (
            <tr key={data.id}>
              <th>{data.id}</th>
              <td>{data.title}</td>
              <td>{data.firsName}</td>
              <td>{data.surname}</td>
              <td>{data.email}</td>
              <td>{data.roomId}</td>
              <td>{data.checkInDate}</td>
              <td>{data.checkInDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SearchResult;
