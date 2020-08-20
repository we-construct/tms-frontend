import LoginPage from "../Containers/LoginPage";
import AcceptInvitation from "../Containers/AcceptInvitation";

const routes = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/invitation",
    component: AcceptInvitation,
  },
];

export default routes;
