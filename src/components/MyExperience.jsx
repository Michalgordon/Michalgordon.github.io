import { EXPERIENCE_LIST } from "../constants";
import { ExperienceCard, Icon, ProfilePicture } from "./index";

const MyExperience = () => {
  return (
    <div className="timeline">
      <ProfilePicture
        className={
          "relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 border-2 border-russian-blue bg-russian-blue mb-20"
        }
      ></ProfilePicture>

      {EXPERIENCE_LIST.map((experienceItem, index) => (
        <div key={index} className="flex">
          <div
            className={`timeline-container ${
              (index + 1) % 2 == 0
                ? "timeline-container--left"
                : "timeline-container--right"
            }`}
          >
            <div
              className={`timeline-icon w-fit border-2 border-russian-blue rounded-full aspect-square bg-white p-1 top-[20px]
${(index + 1) % 2 == 0 ? "timeline-icon--left" : "timeline-icon--right"}`}
            >
              <Icon
                className="w-[var(--icon-w)]"
                name={experienceItem.iconName}
                fill="#9AAEBB" //TODO
              ></Icon>
            </div>

            <ExperienceCard
              {...experienceItem}
              className={`relative border-2 border-russian-blue ${
                (index + 1) % 2 == 0
                  ? "border-arrow--left"
                  : "border-arrow--right"
              }`}
            ></ExperienceCard>
          </div>
        </div>
      ))}
      <img
        className="relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 aspect-square rounded-full border-2 border-russian-blue bg-russian-blue mt-20 shadow-lg"
        src="./mikey-highschool.png"
      ></img>
    </div>
  );
};

export default MyExperience;
