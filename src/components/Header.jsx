import { NavLink, useLocation } from "react-router-dom";
import { useState, Fragment } from "react";
import { Icon } from "../components";
import { PAGES } from "../constants";
import { motion } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  let location = useLocation();
  const headerTitle = () => {
    const page = PAGES.find((page) => {
      console.log(location.pathname,page.path )
      return page.path === location.pathname && page.path != "/vite-project/";
    });
    return page ? page.title + "." : null;
  };
  return (
    <Fragment>
      <nav className="laptop:hidden flex justify-between items-center p-6">
        <motion.h2
          key={location.pathname}
          className="section-header"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          {headerTitle()}
        </motion.h2>
        <button className="z-50" onClick={() => setOpen(!open)}>
          <Icon
            name={open ? "times-solid" : `bars-solid`}
            className="w-8"
          ></Icon>
        </button>
      </nav>

      <nav
        open={open}
        className={`laptop:header-laptop header laptop:transition-none transition-transform duration-300 ease-in-out  ${
          open ? "translate-x-0 " : "translate-x-full laptop:translate-x-0"
        }`}
      >
        {PAGES.map((page, index) => (
          <NavLink
            onClick={() => setOpen(false)}
            key={index}
            className={`uppercase text-base laptop:border-r-2 laptop:border-russian-blue laptop:px-6 laptop:last:border-none 
          ${({ isActive }) => (isActive ? `active` : ``)}
          ${index == 0 ? "laptop:mr-auto laptop:border-none" : ""} `}
            to={page.path}
          >
            {page.title}
          </NavLink>
        ))}
      </nav>
    </Fragment>
  );
};

export default Header;
