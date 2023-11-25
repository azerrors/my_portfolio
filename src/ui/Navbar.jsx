/* eslint-disable react/style-prop-object */
import FlexUi from "../reusable/FlexUi";
import Typography from "../reusable/Typography";

import { CgDetailsMore } from "react-icons/cg";

import Theme from "./Theme";

function Navbar({ setShow, show }) {
  return (
    <FlexUi type="around" style="pt-10">
      <FlexUi type="none" style="items-center">
        <div className="md:pr-32 pr-16 pb-8">
          <Theme />
        </div>
        <Typography
          type="header_primary_md"
          style="hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
          content="Azer Naghiyev"
        />
      </FlexUi>
      <div>
        {!show && (
          <CgDetailsMore
            onClick={() => setShow((show) => !show)}
            className={` md:hidden text-2xl dark:text-stone-200 cursor-pointer`}
          />
        )}
      </div>
      <FlexUi type="none" style="gap-5 hidden md:flex">
        <a href="#about">
          <Typography type="nav" content="About" />
        </a>
        <a href="#experience">
          <Typography type="nav" content="Experience" />
        </a>

        <a href="#project">
          <Typography type="nav" content="Projects" />
        </a>

        <Typography type="nav" content="Contact" />
      </FlexUi>
    </FlexUi>
  );
}

export default Navbar;
