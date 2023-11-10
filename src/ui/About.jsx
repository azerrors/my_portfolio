/* eslint-disable react/style-prop-object */
import FlexUi from "../reusable/FlexUi";
import ImageUi from "../reusable/ImageUi";
import Typography from "../reusable/Typography";

import { GiAchievement } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";

function About() {
  return (
    <FlexUi type="none" style="flex-col md:h-[85vh] mt-[15vh] min-h-fit">
      <Typography
        type="text_secondary_sm"
        content="Get to know More"
        style="text-center mb-1"
      />
      <Typography
        type="header_primary_lg"
        content="About me"
        style="text-center mb-20"
      />
      <FlexUi type="center" style="my-0 flex-col md:flex-row mx-10 gap-20">
        <ImageUi
          type="secondary"
          src="/public/Marcus Aurelius.jpg"
          style="animate-moveInLeft"
        />
        <FlexUi type="none" style="flex-col text-center">
          <FlexUi type="center" style="gap-5 flex-col md:flex-row">
            <div className="border-2 border-stone-500 p-10 rounded-3xl">
              <FlexUi
                type="none"
                style="flex-col items-center justify-center gap-1"
              >
                <GiAchievement className="text-2xl" />
                <Typography
                  type="header_primary_md"
                  content="Experience(Amateur)"
                />
                <Typography type="text_secondary_md" content="1+ years" />
                <Typography
                  type="text_secondary_md"
                  content="FrontEnd Development"
                />
              </FlexUi>
            </div>

            <div className="border-2 border-stone-500 p-10 rounded-3xl">
              <FlexUi
                type="none"
                style="flex-col items-center justify-center gap-1"
              >
                <PiStudentBold className="text-2xl" />
                <Typography type="header_primary_md" content="Education" />
                <Typography
                  type="text_secondary_md"
                  content="Azerbaijan The University of Echonomy"
                />
                <Typography type="text_secondary_md" content="Grade:2" />
              </FlexUi>
            </div>
          </FlexUi>
          <p className="md:w-[50rem] mt-5 dark:text-stone-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            eligendi in tempore, delectus, unde illo doloremque repellendus amet
            aliquid animi similique eum nulla. Totam rerum nihil quia dolorum
            hic doloribus officia, sed velit culpa architecto sequi iste tenetur
            quis veniam distinctio aspernatur quod, laboriosam beatae at!
            accusamus delenfsfiti, ut, consequuntur illo? Tempora unde illum
            aliquid suscipit, amet officiis dolorem perferendis eos sit neque
            recusandae corporis ea architecto asperiores quibusdam. Iste
            aspernatur omnis aliquam qui aperiam cum. Provident necessitatibus
            molestias optio corporis voluptatibus nostrum maxime aperiam odio
            voluptas, vel, iure cumque. Omnis, fugit. Ullam consequuntur
            deserunt, quidem sequi placeat mollitia ipsa amet.
          </p>
        </FlexUi>
      </FlexUi>
    </FlexUi>
  );
}

export default About;
