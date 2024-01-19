import PropTypes from "prop-types";

const Tooltip = ({ children, tooltip }) => {
  if (tooltip)
    return (
      <div className="tooltip">
        {children}
        <span className="tooltiptext capitalize">{tooltip}</span>
      </div>
    );
  else return children;
};
export default Tooltip;

Tooltip.propTypes = {
  tooltip: PropTypes.string,
  children: PropTypes.node,
};
