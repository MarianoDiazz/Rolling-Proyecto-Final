import React from "react";
import CarouselHome from "../home/carouselHome/CarouselHome";
import AboutUs from "./AboutUs/AboutUs"
import Carta from "../Carta/Carta"
import ContactUs from "./ContactUs.js/ContactUs";
import Testimonial from "./Testimonials/Testimonial";


const Home = () => {
  return (
    <div>
      <CarouselHome />
      <AboutUs/>
      <Testimonial/>
      <Carta/>
      <ContactUs/>
    </div>
  );
};

export default Home;
