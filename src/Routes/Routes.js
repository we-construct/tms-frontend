import LoginPage from "../Containers/LoginPage";
import RegistrationPage from "../Containers/RegistrationPage";

const routes = [
  {
    path: "/",
    exact: true,
    component: LoginPage,
  },
  {
    path: "/registration",
    component: RegistrationPage,
  },
];

export default routes;
