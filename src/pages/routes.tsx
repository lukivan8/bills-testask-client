import Home from "./Home";
import Create from "./Create";

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