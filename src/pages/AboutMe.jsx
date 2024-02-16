import {
  Icon,
  ProfilePicture,
  RandomFacts,
  MyExperience,
  SkillsList,
} from "../components";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  const blurb = (
    <Fragment>
      <p>
        I'm a full stack developer with over
        <span className="font-bold uppercase"> 3 years of experience</span>. I
        used to work for a successful startup in Tel Aviv but quit my job to try
        out a different lifestyle in the States. My partner and I are living in
        a van and slowly making our way around the country while rock climbing,
        hiking and absorbing the views.
      </p>
      <p>
        My experience in a small startup made me a{" "}
        <span className="font-bold uppercase">
          fast and independent learner
        </span>
        . I gained a lot of experience with Vue.js, JavaScript, CSS and HTML.
        Since moving to the States, I've turned my attention to new frameworks
        that will make me a stronger and more well-rounded developer.
      </p>
      <p>
        Learning on my own and living on the road has been awesome but I'm ready
        for the next step in my career. I can't wait to work on cool, new
        products and be{" "}
        <span className="font-bold uppercase"> part of a team </span> again!
      </p>
    </Fragment>
  );
  return (
    <div className="w-full flex flex-col gap-10 pt-10 laptop:pt-0">
      <div
        ref={ref}
        className="relative flex flex-col px-4 pb-10 laptop:px-20 laptop:py-10 laptop:min-h-full laptop:box-border laptop:justify-center shadow-xl"
      >
        <div className="flex flex-col laptop:flex-row gap-6 laptop:gap-10 justify-center items-center">
          <motion.div
            className="flex flex-col w-1/2 laptop:w-1/3 justify-center"
            initial={{ x: "200%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <ProfilePicture
              className={"w-full laptop:w-[25rem]"}
            ></ProfilePicture>
          </motion.div>
          <div className="flex flex-col laptop:w-2/3 text-base text-justify px-4 laptop:px-0">
            <motion.h2
              className="hidden laptop:flex section-header laptop:relative laptop:-top-20"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            >
              About Me.
            </motion.h2>
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            >
              {blurb}
            </motion.div>
          </div>
        </div>
        <motion.div
          className="hidden laptop:block absolute bottom-5 self-center"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, bounce: 0.5 }}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          <Icon
            className="w-14 animate-bounce"
            name="angle-double-down-solid"
            fill="#9AAEBB" //TODO
          ></Icon>
        </motion.div>
      </div>
      <div className="relative flex flex-grow flex-col gap-10 laptop:gap-20 px-4 pb-10 laptop:px-20 laptop:py-10 shadow-xl">
        <h2 className="section-header pl-2 laptop:pl-0">Skills.</h2>
        <SkillsList></SkillsList>
      </div>

      <div className="flex flex-grow flex-col gap-10 laptop:gap-20 px-4 pb-10 laptop:px-20 laptop:py-10 shadow-xl">
        <h2 className="section-header pl-2 laptop:pl-0">My Experience.</h2>
        <MyExperience></MyExperience>
      </div>
      <div className="flex flex-grow laptop:min-h-full flex-col gap-10 laptop:gap-20 px-4 pb-10 laptop:px-20 laptop:py-10 laptop:shadow-xl">
        <h2 className="section-header pl-2 laptop:pl-0">Random Facts.</h2>
        <div className="flex flex-grow flex-col justify-center items-center gap-4 px-4">
          <RandomFacts></RandomFacts>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
