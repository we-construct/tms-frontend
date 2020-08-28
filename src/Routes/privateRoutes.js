import Main from '../Containers/Main';
import SendInvitation from '../Containers/Send-invitation';
import Profile from '../Containers/Profile';
import ErrorPage from '../Containers/404';

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
    path: '/404',
    exact: true,
    component: ErrorPage,
  },
];

export default privateRoutes;
