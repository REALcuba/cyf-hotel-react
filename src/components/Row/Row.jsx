import React, { useState } from "react";
import moment from "moment";

const Row = props => {
  const [selected, setSelected] = useState(false);
  const checkIn = moment(props.data.checkInDate);
  const checkOut = moment(props.data.checkOutDate);
  const totalNigths = checkOut.diff(checkIn, "days");
  return (
    <tr
      key={props.data.id}
      onClick={() => setSelected(!selected)}
      className={selected ? "selectedRow" : ""}
    >
      <td className="dataCentered">{props.data.id}</td>
      <td>{props.data.title}</td>
      <td>{props.data.firstName}</td>
      <td>{props.data.surname}</td>
      <td>{props.data.email}</td>
      <td className="dataCentered">{props.data.roomId}</td>
      <td className="dataCentered">{props.data.checkInDate}</td>
      <td className="dataCentered">{props.data.checkOutDate}</td>
      <td className="dataCentered">{totalNigths}</td>
      <td>
        <button id={props.data.id}>Search Profile</button>
      </td>
    </tr>
  );
};

export default Row;
