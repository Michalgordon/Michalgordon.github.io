import PropTypes from "prop-types";
import { Icon, Tooltip } from "./index";
const Skill = ({
  title,
  iconName,
  iconColor,
  info,
  tooltip,
  size = "regular",
}) => {
  return (
    <Tooltip tooltip={tooltip}>
      <div
        className={`inline-flex flex-col items-center gap-1 ${
          size === "small" ? "mx-1" : size === "large" ? "" : " mx-4"
        }`}
      >
        <Icon
          name={iconName}
          fill={iconColor}
          className={`${iconName ? "" : "hidden"} 
          ${size === "small" ? "w-5" : size === "large" ? "w-8" : "w-6"}`}
        ></Icon>

        <h1
          className={`capitalize font-medium text-sm text-center w-min	laptop:w-auto ${
            size === "small" ? "text-xs" : size === "large" ? "" : "text-sm"
          } ${title ? "" : "hidden"}`}
        >
          {title}
        </h1>
        <p
          className={`hidden laptop:block ${
            info ? "" : "hidden"
          } text-xs text-center flex-grow`}
        >
          {info}
        </p>
      </div>
    </Tooltip>
  );
};

export default Skill;

Skill.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.string,
  iconColor: PropTypes.string,
  tooltip: PropTypes.string,
};
