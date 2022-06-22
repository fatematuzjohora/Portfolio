import { Route, Routes } from "react-router-dom";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails";
import Navbar from "./Pages/Share/Navbar";
import Blogs from "./Pages/Blogs";
import AboutMe from "./Pages/AboutMe";

function App() {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <div>
      <Particles
        id="tsparticles"
        url="particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projectDetails/:_id" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
