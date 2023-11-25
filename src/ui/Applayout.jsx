import React, { useState } from "react";
import Entrance from "./Entrance";
import Navbar from "./Navbar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import BottomNav from "./BottomNav";

function Applayout() {
  const [show, setShow] = useState(false);
  return (
    <section className="bg-stone-100 dark:bg-gray-950 scroll-smooth h-full">
      <div>
        <div
          className={`absolute h-full transform border-x z-[1000]  bg-stone-100 dark:bg-gray-950 ${
            !show ? "hidden -translate-x-full opacity-0" : "translate-x-0"
          } h-screen w-72 transition-transform duration-700`}
        >
          {show && <BottomNav setShow={setShow} />}
        </div>

        <Navbar setShow={setShow} show={show} />
        <div className="overflow-auto">
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
        </div>
      </div>
    </section>
  );
}

export default Applayout;
