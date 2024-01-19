import PropTypes from "prop-types";

const ScrollingBanner = ({ children, containerStyle, bannerStyle }) => {
  return (
    <div className={`absolute overflow-hidden right-0 top-0 ${containerStyle}`}>
      <div className="rotate-45 w-full inline-flex flex-nowrap">
        <div className={`flex animate-infinite-scroll ${bannerStyle}`}>
          {children}
        </div>
        <div
          aria-hidden
          className={`flex animate-infinite-scroll ${bannerStyle}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

ScrollingBanner.propTypes = {
  children: PropTypes.node,
  bannerStyle: PropTypes.string,
  containerStyle: PropTypes.string,
};

export default ScrollingBanner;
