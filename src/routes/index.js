import { lazy } from "react";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Portfolio = lazy(() => import("../pages/Portfolio"));
const Skills = lazy(() => import("../pages/Skills"));
const Contact = lazy(() => import("../pages/Contact"));

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/portfolio",
    component: Portfolio,
  },
  {
    path: "/skills",
    component: Skills,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export default routes;
