import PropTypes from "prop-types";

const ExperienceCard = ({
  timeLine,
  location,
  company,
  title,
  info,
  imgSrc,
  className,
}) => {
  return (
    <div
      className={`group flex flex-col gap-2 justify-center p-4 rounded-xl text-sm shadow-md ${className} `}
    >
      <div className="relative overflow-hidden capitalize flex flex-col ">
        <div className="">
          <h3 className="text-xs">{timeLine}</h3>
          <h1 className="text-xl uppercase font-thin">{title}</h1>
          <h2 className="text-sm font-semibold">{company}</h2>
          <h3 className="text-xs">{location}</h3>
        </div>
      </div>
      <ul className="flex flex-col gap-1 pl-5 text-xs">
        {info.map((item, index) => (
          <li key={index} className="list-disc">
            <p>
              <span></span>
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

ExperienceCard.propTypes = {
  timeLine: PropTypes.string,
  location: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  className: PropTypes.string,
};
export default ExperienceCard;
