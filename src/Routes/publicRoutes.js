import Login from '../Containers/Login';
import AcceptInvitation from '../Containers/AcceptInvitation';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/invitation/:token',
    exact: true,
    component: AcceptInvitation,
  },
];

export default publicRoutes;
