import React from "react";
import FlexUi from "../reusable/FlexUi";
import Typography from "../reusable/Typography";
import Theme from "./Theme";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function BottomNav({ setShow }) {
  const handleClick = () => {
    setShow((show) => !show);
  };
  return (
    <div>
      <div className="flex  gap-20 justify-center pt-10">
        <div className="animate-moveInLeft">
          <Theme />
        </div>
        <AiOutlineClose
          className="text-3xl cursor-pointer mt-6 animate-moveInRight dark:text-stone-100 font-semibold "
          onClick={() => setShow((show) => !show)}
        />
      </div>
      <FlexUi type="none" style="flex-col mt-32 gap-10 items-center ">
        <a href="#about" className="animate-moveInBottom" onClick={handleClick}>
          <Typography type="side_nav" content="About" />
        </a>
        <a
          href="#experience"
          className="animate-moveInBottom"
          onClick={handleClick}
        >
          <Typography type="side_nav" content="Experience" />
        </a>

        <a
          href="#project"
          className="animate-moveInBottom"
          onClick={handleClick}
        >
          <Typography type="side_nav" content="Projects" />
        </a>
        <div className="animate-moveInBottom">
          <Typography type="side_nav" content="Contact" onClick={handleClick} />
        </div>
      </FlexUi>
      <FlexUi type="center" style="mt-40 gap-2 text-stone-800 text-3xl">
        <a
          href="https://github.com/azerrors?tab=repositories"
          className="animate-moveInLeft"
        >
          <FaGithub className=" cursor-pointer dark:text-stone-200" />
        </a>
        <a
          href="https://www.linkedin.com/in/azer-nagiyev-a1b85a247/"
          className="animate-moveInRight"
        >
          <FaLinkedin className=" cursor-pointer dark:text-stone-200" />
        </a>
      </FlexUi>
    </div>
  );
}

export default BottomNav;
