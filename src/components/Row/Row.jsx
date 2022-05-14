import React from "react";
import moment from "moment";

const Row = props => {
  const checkIn = moment(props.data.checkInDate);
  const checkOut = moment(props.data.checkOutDate);
  const totalNigths = checkOut.diff(checkIn, "days");
  return (
    <div>
      <tr key={props.data.id}>
        <th>{props.data.id}</th>
        <td>{props.data.title}</td>
        <td>{props.data.firstName}</td>
        <td>{props.data.surname}</td>
        <td>{props.data.email}</td>
        <td>{props.data.roomId}</td>
        <td>{props.data.checkInDate}</td>
        <td>{props.data.checkOutDate}</td>
        <td>{totalNigths}</td>
      </tr>
    </div>
  );
};

export default Row;
