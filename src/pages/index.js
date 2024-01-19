// import Hero from "./Hero";
import { lazy } from 'react';

const Hero = lazy(() => import('./Hero'));
const AboutMe = lazy(() => import('./AboutMe'));
const ErrorPage = lazy(() => import('./ErrorPage'));
const MyProjects = lazy(() => import('./MyProjects'));
const ContactMe = lazy(() => import('./ContactMe'));

export {Hero, AboutMe, MyProjects, ContactMe, ErrorPage}
