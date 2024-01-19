import PropTypes from "prop-types";

const ProfilePicture = ({ className }) => {
  return (
    <img
      className={` ${className} -rotate-12 rounded-full aspect-square object-scale-down object-center shadow-lg
      bg-russian-blue`}
      src="/vite-project/mikey-profile.png"
    ></img>
  );
};

export default ProfilePicture;

ProfilePicture.propTypes = {
  className: PropTypes.string,
};
