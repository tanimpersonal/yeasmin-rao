import React from "react";
import yeasmin from "../../images/yeasmin rao.jpg";
const About = () => {
  return (
    <div className="my-5 mx-5">
      <div className="main d-flex gap-5 justify-content-between align-items-center">
        <div className="image w-100">
          <img className="w-100" src={yeasmin} alt="" />
        </div>
        <div className="text px-5">
          <p>
            Born in Tehran, Iran and moved to the United States to go to college
            and studied art, concentrating in photography in California State
            University, Northridge. Focusing more in Fine Art photography during
            academic years in college, but also passionate about applying it to
            documentary photography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
