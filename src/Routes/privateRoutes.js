import Main from '../Containers/Main';
import SendInvitation from '../Containers/Send-invitation';
import UserProfile from '../Containers/UserProfile';
import ErrorPage from '../Containers/404';
import Goals from '../Containers/Goals';

const privateRoutes = [
  {
    path: '/',
    exact: true,
    component: UserProfile,
  },
  {
    path: '/edit/:user',
    exact: true,
    component: ViewProfile,
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
    path: '/goals',
    exact: true,
    component: Goals,
  },
  {
    path: '/404',
    exact: true,
    component: ErrorPage,
  },
];

export default privateRoutes;
