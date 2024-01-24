import { ORBIT_ICONS } from "../constants";
import { Icon, ProfilePicture } from "../components";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-col flex-grow gap-6 laptop:gap-0 laptop:flex-row h-full p-4 laptop:p-5 laptop:px-20 justify-center overflow-hidden">
      <motion.h1
        className="text-3xl laptop:hidden text-center font-thin"
        initial={{ opacity: 0 }}
        animate={{ opacity: "100%" }}
        transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
      >
        Hi, I'm Mikey!
      </motion.h1>
      <motion.div
        className="relative w-1/2 laptop:w-1/3 flex laptop:flex-col self-center justify-center items-center laptop:order-last "
        initial={{ x: "200%" }}
        animate={{ x: "0" }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <ProfilePicture
          className={"w-full laptop:w-[25rem] z-20"}
        ></ProfilePicture>
        {ORBIT_ICONS.map((icon, index = index + 1) => (
          <motion.span
            key={index}
            initial={{ left: "50%", top: "50%", zIndex: 10 }}
            animate={{ left: "-10%", top: "70%" }}
            transition={{ delay: index, duration: 1 }}
            style={{
              "--orbit-delay": index + 1 + "s",
            }}
            className="absolute animate-orbit bg-skipper-gray rounded-full p-1"
          >
            <Icon
              className={icon.className}
              fill="white"
              name={icon.iconName}
            ></Icon>
          </motion.span>
        ))}
      </motion.div>

      <div className="flex laptop:w-2/3 text-center laptop:text-start justify-center flex-col gap-24">
        <div className="flex flex-col gap-3">
          <motion.h1
            className="hidden laptop:flex text-3xl laptop:text-6xl font-thin"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
          >
            Hi, I'm Mikey!
          </motion.h1>
          <div className="flex flex-col  laptop:w-fit laptop:pl-20 gap-20">
            <motion.h2
            className="text-2xl laptop:text-5xl font-semibold"
              initial={{ x: "-200%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              <span>A Full Stack </span>
              <span className="block laptop:inline">
               Developer.{" "}
              </span>
            </motion.h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
