import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menuDetail from "../../../data/menuDetails"; // Agregar esta línea
import CarouselHome from "../home/carouselHome/CarouselHome";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <h2>Our Menu</h2>
      <hr />
      <Row>
        {menuDetail.map((item, index) => (
          <Col md={4} key={index}>
            <Card className="my-4">
              <Card.Img
                className="img-fluid"
                variant="top"
                src={item.imageURL}
              />
              <Card.Body>
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <Card.Title className="m-0 text-truncate">
                    {item.name}
                  </Card.Title>
                  <span className="badge bg-yellow">New</span>
                </div>
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0 ms-4 fs-4 ">${item.price}</p>
                  <Link
                    to={`/menu/edit/${index}`}
                    className="btn-gray text-decoration-none text-center"
                  >
                    Buy
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <AboutUs/>
    </div>
  );
};

export default Home;
