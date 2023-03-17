import React from "react";
import { useLocation } from "react-router-dom";

const MenuDetail = () => {
  const location = useLocation();
  const menuItem = location.state.menuItem;

  return (
    <div>
      <h2>Menu Item Details</h2>
      <p>Name: {menuItem.name}</p>
      <p>Price: {menuItem.price} pesos</p>
      <p>Description: {menuItem.description}</p>
      <p>Image URL: {menuItem.imageURL}</p>
    </div>
  );
};

export default MenuDetail;
