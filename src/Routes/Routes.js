import LoginPage from "../Containers/LoginPage";
import AcceptInvitationPage from "../Containers/AcceptInvitationPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/invitation",
    component: AcceptInvitationPage,
  },
];

export default routes;
