import Main from '../Containers/Main';
import SendInvitation from '../Containers/Send-invitation';
import UserProfile from '../Containers/UserProfile';
import ErrorPage from '../Containers/404';
import ViewProfile from '../Containers/ViewProfile';
import Goals from '../Containers/Goals';
import Vacations from '../Containers/Vacations';

const privateRoutes = [
  {
    path: "/",
    exact: true,
    component: UserProfile,
  },
  {
    path: "/edit/:user",
    exact: true,
    component: ViewProfile,
  },
  {
    path: "/employees",
    exact: true,
    component: Main,
  },
  {
    path: "/send-invitation",
    exact: true,
    component: SendInvitation,
  },
  {
    path: "/goals",
    exact: true,
    component: Goals,
  },
  {
    path: '/vacations',
    exact: true,
    component: Vacations,
  },
  {
    path: '/404',
    exact: true,
    component: ErrorPage,
  },
];

export default privateRoutes;
