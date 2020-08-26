import Main from '../Containers/Main';
import SendInvitation from '../Containers/Send-invitation';

const privateRoutes = [
  {
    path: '/',
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
