import React from "react";
import FlexUi from "../reusable/FlexUi";
import Typography from "../reusable/Typography";

function BottomNav() {
  return (
    <FlexUi type="none" style="gap-2 justify-center">
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
  );
}

export default BottomNav;
