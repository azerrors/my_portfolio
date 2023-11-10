/* eslint-disable react/style-prop-object */
import FlexUi from "../reusable/FlexUi";
import List from "../reusable/List";
import Typography from "../reusable/Typography";

function Experience() {
  return (
    <FlexUi type="none" style="flex-col md:h-[85vh] mt-[15vh] min-h-fit">
      <Typography
        type="text_secondary_sm"
        content="Explore my"
        style="text-center mb-1"
      />
      <Typography
        type="header_primary_lg"
        content="Experience"
        style="text-center mb-20"
      />

      <div className="mx-40 ">
        <FlexUi type="around" style="flex-col gap-10 md:flex-row">
          <FlexUi
            type="none"
            style="flex-col md:w-auto  w-screen border-2 border-stone-400 rounded-3xl p-10"
          >
            <Typography
              type="text_secondary_lg"
              content="FrontEnd Development"
              style="text-center mb-1 "
            />
            <List type="frontskills" />
          </FlexUi>

          <FlexUi
            type="none"
            style="flex-col gap-10  md:gap-24"
          >
            <FlexUi
              type="none"
              style="flex-col md:w-auto  w-screen p-7  border-2 border-stone-400 rounded-3xl"
            >
              <Typography
                type="text_secondary_lg"
                content="Soft Skills"
                style="text-center mb-1  "
              />
              <List type="softskills" />
            </FlexUi>

            <FlexUi
              type="none"
              style="flex-col md:w-auto  w-screen md:p-5 border-2 border-stone-400 rounded-3xl"
            >
              <Typography
                type="text_secondary_lg"
                content="Language"
                style="text-center mb-1  "
              />
              <List type="languageskills" />
            </FlexUi>
          </FlexUi>
        </FlexUi>
      </div>
    </FlexUi>
  );
}

export default Experience;
