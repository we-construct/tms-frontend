import Main from '../Containers/Main';
import Invitation from '../Containers/Invitation';

const privateRoutes = [
  {
    path: '/',
    exact: true,
    component: Main,
  },
  {
    path: '/send-invitation',
    exact: true,
    component: Invitation,
  },
];

export default privateRoutes;
