import { AiOutlineTeam } from "react-icons/ai";
import { GiMoebiusStar } from "react-icons/gi";
import { LuLanguages } from "react-icons/lu";
import FlexUi from "./FlexUi";
import ImageUi from "./ImageUi";
import Typography from "./Typography";
import ButtonUi from "./ButtonUi";

function ListElement({ type, skill, project }) {
  if (type === "frontskills") {
    const { name, status } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <GiMoebiusStar className="md:text-2xl" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography type="header_primary_md" content={name} />
          <Typography type="text_secondary_md" content={status} />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "softskills") {
    const { name } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <AiOutlineTeam className="text-2xl" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography type="header_primary_md" content={name} />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "languageskills") {
    const { name, status } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <LuLanguages className="text-2xl" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography type="header_primary_md" content={name} />
          <Typography type="text_secondary_md" content={status} />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "projects") {
    const { name, tech, image, github, demo, description } = project;
    return (
      <FlexUi
        type="none"
        style="gap-3 items-center max-w-md  flex-col border-2 border-stone-400 rounded-xl "
      >
        <div className="p-5 ">
          <ImageUi type="triatry" src={image} />
        </div>
        <FlexUi type="none" style="flex-wrap gap-2  justify-center ">
          {tech.map((tech) => {
            return (
              <div
                className="border-2 rounded-lg border-stone-500 p-1 "
                key={tech}
              >
                <Typography type="header_primary_xs" content={tech} />
              </div>
            );
          })}
        </FlexUi>
        <FlexUi type="none" style="md:gap-20  gap-5 my-10 items-center h">
          <FlexUi type="none" style="flex-col">
            <Typography type="header_primary_sm" style = "hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]" content={name} />
          </FlexUi>
          <FlexUi type="none" style="gap-2">
            <ButtonUi type="primary_sm" content="Github" link={github} />
            <ButtonUi type="secondary_sm" content="Demo Live" link={demo} />
          </FlexUi>
        </FlexUi>
      </FlexUi>
    );
  }
}

export default ListElement;
