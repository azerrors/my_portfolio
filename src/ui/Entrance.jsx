/* eslint-disable react/style-prop-object */
import ButtonUi from "../reusable/ButtonUi";
import FlexUi from "../reusable/FlexUi";
import ImageUi from "../reusable/ImageUi";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typography from "../reusable/Typography";

function Entrance() {
  return (
    <FlexUi
      type="center"
      style="mx-20 h-screen md:flex-row flex-col min-h-fit text-center gap-5	"
    >
      <ImageUi
        type="primary"
        src="../../dist/Marcus Aurelius.jpg"
        style="animate-moveInLeft"
      />
      <FlexUi type="center" style="flex-col gap-2 ">
        <Typography
          type="text_secondary_sm"
          content="Hello,I`m"
          style="animate-moveInRight"
        />
        <Typography
          type="text_primary_lg"
          content="Azer Naghiyev"
          style="animate-moveInLeft"
        />
        <Typography
          type="text_secondary_md"
          content="FrontEnd Developer"
          style="animate-moveInRight"
        />
        <FlexUi type="center" style="mt-5 gap-2">
          <ButtonUi
            type="primary_md"
            content="Download Cv"
            style="animate-moveInTop"
          />
          <ButtonUi
            type="secondary_md"
            content="Contact Info"
            style="animate-moveInBottom"
          />
        </FlexUi>
        <FlexUi type="center" style="mt-5 gap-2 text-stone-800 text-3xl">
          <a href="https://github.com/azerrors?tab=repositories">
            <FaGithub className=" cursor-pointer dark:text-stone-200" />
          </a>
          <a href="https://www.linkedin.com/in/azer-nagiyev-a1b85a247/">
            <FaLinkedin className=" cursor-pointer dark:text-stone-200" />
          </a>
        </FlexUi>
      </FlexUi>
    </FlexUi>
  );
}

export default Entrance;
