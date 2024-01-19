import { Fragment } from "react";
import { RANDOM_FACTS } from "../constants";
import { Icon } from "./index";
const RandomFacts = () => {
  return (
    <Fragment>
      {RANDOM_FACTS.map((fact, index) => (
        <h3
          className={`flex text-base items-center gap-4 text-center ${
            index % 4 == 0
              ? "font-thin italic"
              : index % 2 == 0
              ? "text-base front-bold tracking-wider	"
              : index % 3 == 0
              ? "laptop:text-sm italic font-semibold uppercase"
              : "laptop:text-2xl last:uppercase"
          }`}
          key={index}
        >
          <Icon
            name={fact.iconName}
            className={"w-6 min-w-[24px]"}
            fill="#8BA7B8"
          ></Icon>

          <p>{fact.title}</p>
          <Icon
            name={fact.iconName}
            className={"w-6 min-w-[24px]"}
            fill="#8BA7B8"
          ></Icon>
        </h3>
      ))}
    </Fragment>
  );
};

export default RandomFacts;
