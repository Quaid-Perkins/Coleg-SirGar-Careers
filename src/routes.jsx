import { lazy } from "solid-js";
import { Router } from "@solidjs/router";

// Define the routes for each of the Pages, the file path in the URL. This uses Lazy Loading for the Page's code.
const routes = [
  // Setting the "Not Found" (404) Page to be displayed when no valid path is found.
  {
    path: "*",
    component: lazy(() => import("./pages/not_found")),
  },
  {
    path: "/career_compass/",
    component: lazy(() => import("./pages/home")),
  },
  {
    path: "/career_compass/part-time-jobs",
    component: lazy(() => import("./pages/part_time_jobs")),
  },
  {
    path: "/career_compass/volunteering",
    component: lazy(() => import("./pages/volunteering")),
  },
  {
    path: "/career_compass/new-skills",
    component: lazy(() => import("./pages/new_skills")),
  },
  {
    path: "/career_compass/resources",
    component: lazy(() => import("./pages/resources")),
  },
  {
    path: "/career_compass/travel",
    component: lazy(() => import("./pages/travel")),
  },
  {
    path: "/career_compass/sports",
    component: lazy(() => import("./pages/sports")),
  },
  {
    path: "/career_compass/contact",
    component: lazy(() => import("./pages/contact")),
  },
];

// Returns a Router with the defined routes, all Data Driven.
const Routes = (props) => {
  return <Router root={props.root}>{routes}</Router>;
};

export default Routes;
