import FlexUi from "../reusable/FlexUi";
import List from "../reusable/List";
import Typography from "../reusable/Typography";

function Projects() {
  return (
    <FlexUi type="none" style="flex-col md:h-[85vh] mt-[15vh] min-h-fit">
      <Typography
        type="text_secondary_sm"
        content="Browse my Recent"
        style="text-center mb-1"
      />
      <Typography
        type="header_primary_lg"
        content="Projects"
        style="text-center mb-20"
      />

      <List type="projects"/>
    </FlexUi>
  );
}

export default Projects;
