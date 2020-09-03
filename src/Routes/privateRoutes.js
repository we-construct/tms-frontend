import Main from '../Containers/Main';
import SendInvitation from '../Containers/Send-invitation';
import Profile from '../Containers/Profile';
import ErrorPage from '../Containers/404';
import Vacations from '../Containers/Vacations';

const privateRoutes = [
  {
    path: '/',
    exact: true,
    component: Profile,
  },
  {
    path: '/employees',
    exact: true,
    component: Main,
  },
  {
    path: '/send-invitation',
    exact: true,
    component: SendInvitation,
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
