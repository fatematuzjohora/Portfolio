import React from "react";
import Banner from "./Banner";
import ClientsReviews from "./ClientsReviews";
import Contact from "./Contact";
import MySkills from "./MySkills/MySkills";
import Projects from "./Projects/Projects";

const Home = () => {
  return (
    <div>
      <Banner />
      <MySkills />
      <Projects />
      <ClientsReviews />
      <Contact />
    </div>
  );
};

export default Home;
