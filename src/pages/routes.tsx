import Home from "./bill/Home";
import Create from "./bill/Create";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    path: "/create",
    component: Create,
    exact: true,
  },
];

export default routes