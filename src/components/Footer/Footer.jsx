import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.address.map(prop => (
        <li key={prop}>{prop}</li>
      ))}
    </ul>
  );
};

export default Footer;
