import { Icon, Skill } from "../components";
import PropTypes from "prop-types";

const ProjectCard = ({ title, info, links, skills, imgSrc }) => {
  return (
    <div className="relative flex flex-col w-80 border-russian-blue border-2 rounded-md p-4 pb-2 justify-center items-center gap-4 bg-white shadow-md ">
      <div className="flex flex-col gap-1">
        <h1 className=" text-xl uppercase font-thin text-center">
          - {title} -
        </h1>
        <ul className="flex gap-1 justify-center">
          {skills?.map((skill, index) => (
            <Skill
              key={index}
              tooltip={skill.tooltip}
              iconName={skill.iconName}
              size="small"
            ></Skill>
          ))}
        </ul>
      </div>

      <div
        style={{ "--image-url": `url(${imgSrc})` }}
        className={`w-[316px] -mx-4 h-20 bg-[image:var(--image-url)] bg-cover border-y-2 border-russian-blue `}
      ></div>
      <p className="flex text-center text-sm font-thin px-2 h-16 items-center">
        {info}
      </p>
      <ul className="w-full flex justify-center items-center">
        {links.map((footerItem, index) => (
          <a
            key={index}
            href={footerItem.href}
            target="_blank"
            rel="noopener noreferrer"
            download={footerItem.download}
            className="group flex flex-col justify-center items-center uppercase text-xs border-r-2 border-russian-blue cursor-pointer px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] last:border-none"
          >
            <Icon
              name={footerItem.iconName}
              className="w-5 group-hover:[filter:drop-shadow(3px_5px_2px_rgb(0_0_0_/_0.2))]"
            ></Icon>
            <h1>{footerItem.title}</h1>
          </a>
        ))}
      </ul>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  links: PropTypes.array,
  imgSrc: PropTypes.string,
  skills: PropTypes.array,
};
export default ProjectCard;
