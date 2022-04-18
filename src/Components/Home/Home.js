import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Services from "../Services/Services";
import useData from "../Utility/useData";

import "./Home.css";
const Home = () => {
  const datas = useData();
  return (
    <div>
      <div className="header-banner"></div>
      <div className="service">
        <div className="service-heading d-flex justify-content-center my-4">
          <h1>Services</h1>
        </div>
        <div className="services row w-90 ">
          {datas.map((data) => (
            <Services key={data.id} data={data}></Services>
          ))}
        </div>
      </div>
      <div className="contact">
        <div className="contact-heading d-flex justify-content-center my-4">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-container">
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
};

export default Home;
