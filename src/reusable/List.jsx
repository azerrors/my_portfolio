import {
  hardSkills,
  softSkills,
  languageSkills,
} from "..//.//utilities/skills";
import { myProjects } from "..//.//utilities/projects";
import ListElement from "./ListElement";

function List({ type }) {
  if (type === "frontskills") {
    return (
      <div className="grid grid-cols-2 md:place-items-start jutify-center place-items-center gap-10 mt-7">
        {hardSkills?.map((skill) => {
          return <ListElement skill={skill} key={skill.id} type={type} />;
        })}
      </div>
    );
  }
  if (type === "softskills") {
    return (
      <div className="grid grid-cols-2   md:place-items-start place-items-center gap-10 mt-7">
        {softSkills?.map((skill) => {
          return <ListElement skill={skill} key={skill.id} type={type} />;
        })}
      </div>
    );
  }
  if (type === "languageskills") {
    return (
      <div className="grid grid-cols-2   gap-10 mt-7">
        {languageSkills?.map((skill) => {
          return <ListElement skill={skill} key={skill.id} type={type} />;
        })}
      </div>
    );
  }
  if (type === "projects") {
    return (
      <div className="flex justify-center gap-16 p-5 flex-wrap  ">
        {myProjects?.map((project) => {
          return <ListElement project={project} key={project.id} type={type} />;
        })}
      </div>
    );
  }
}

export default List;
