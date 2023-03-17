import React, { useState } from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import MenuItem from "../Menu/Items/MenuItem";

const Menu = () => {
  const [menuItems, setMenuItems] = useState(
    JSON.parse(localStorage.getItem("menuItems")) || []
  );
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");

  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !price || !imageURL) {
      alert("Please fill in all fields.");
      return;
    }
    if (isNaN(Number(price))) {
      alert("Please enter a valid price.");
      return;
    }
    if (editingIndex !== null) {
      const newMenuItems = [...menuItems];
      newMenuItems[editingIndex] = {
        name,
        price,
        imageURL,
      };
      setMenuItems(newMenuItems);
      localStorage.setItem("menuItems", JSON.stringify(newMenuItems));
      setEditingIndex(null);
    } else {
      const newMenuItem = {
        name,
        price,
        imageURL,
      };
      setMenuItems([...menuItems, newMenuItem]);
      localStorage.setItem(
        "menuItems",
        JSON.stringify([...menuItems, newMenuItem])
      );
    }
    setName("");
    setPrice("");
    setImageURL("");
  };

  const handleDelete = (index) => {
    const newMenuItems = [...menuItems];
    newMenuItems.splice(index, 1);
    setMenuItems(newMenuItems);
    localStorage.setItem("menuItems", JSON.stringify(newMenuItems));
  };

  const handleEdit = (index, menuItem) => {
    setName(menuItem.name);
    setPrice(menuItem.price);
    setImageURL(menuItem.imageURL);
    setEditingIndex(index);
  };

  return (
    <div>
      <h2>Menu</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formItemName">
          <Form.Label>Item Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter item name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formItemPrice">
          <Form.Label>Item Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter item price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="formItemDescription">
  <Form.Label>Item Description</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter item description"
    value={description}
    onChange={(event) => setDescription(event.target.value)}
    maxLength={100}
  />
</Form.Group>

        <Form.Group controlId="formImageURL">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter image URL"
            value={imageURL}
            onChange={(event) => setImageURL(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {editingIndex !== null ? "Update Item" : "Add Item"}
        </Button>
        {editingIndex !== null && (
          <Button
            variant="secondary"
            className="ml-3"
            onClick={() => setEditingIndex(null)}
          >
            Cancel
          </Button>
        )}
      </Form>

      <h3>Menu Items</h3>
      <ListGroup>
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={index}
            index={index}
            menuItem={menuItem}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ListGroup>
    </div>
  );
};
export default Menu;





