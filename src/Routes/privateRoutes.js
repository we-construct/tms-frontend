import Main from '../Containers/Main';
import SendInvitation from '../Containers/Send-invitation';
import Profile from '../Containers/Profile';

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
];

export default privateRoutes;
