import React from "react";
import Order from "../components/Order";
const Restaurant = props => {
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          <Order orderType="pizza" />
          <Order orderType="Salad" />
          <Order orderType="Chocolate cake" />
        </li>
      </ul>
    </div>
  );
};

export default Restaurant;
