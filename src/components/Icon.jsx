import React from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

const Icon = ({ name, className, fill = "#364954" }) => {
  return (
    <ReactSVG
      src={`src/assets/icons/${name}.svg`}
      className={`${"icon " + className}`}
      style={{
        fill: fill,
        className: className,
      }}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
