import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton/RestaurantButton";
const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders}
      <RestaurantButton orderFunctionProps={orderOne} />
    </li>
  );
};

export default Order;
