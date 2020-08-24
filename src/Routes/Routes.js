import Login from "../Containers/Login";
import AcceptInvitation from "../Containers/AcceptInvitation";

const routes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/invitation/:token",
    exact: true,
    component: AcceptInvitation,
  },
];

export default routes;