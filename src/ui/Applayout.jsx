import React, { useState } from "react";
import Entrance from "./Entrance";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import BottomNav from "./BottomNav";

function Applayout() {
  const [show, setShow] = useState(false);
  console.log(show);
  return (
    <section className="bg-stone-100 dark:bg-gray-950 scroll-smooth h-full">
      <Navbar setShow={setShow} show={show} />
      {show && <BottomNav />}
      <Entrance />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="project">
        <Projects />
      </div>
    </section>
  );
}

export default Applayout;
