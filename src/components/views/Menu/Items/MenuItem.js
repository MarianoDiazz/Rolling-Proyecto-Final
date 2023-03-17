import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuItem = ({ index, menuItem, handleDelete, handleEdit }) => {
  if (!menuItem) {
    return null;
  }

  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h5>{menuItem.name}</h5>
          <p>{menuItem.price} pesos</p>
        </div>
        <div>
          <Button variant="danger" onClick={() => handleDelete(index)}>
            Delete
          </Button>
          <Button
            variant="warning"
            className="ml-3"
            onClick={() => handleEdit(index, menuItem)}
          >
            Edit
          </Button>
          <Link
            to={{
              pathname: `/menu/${index}`,
              state: { menuItem },
            }}
            className="btn btn-primary ml-3"
          >
            Details
          </Link>
        </div>
      </div>
    </ListGroup.Item>
  );
};

export default MenuItem;
