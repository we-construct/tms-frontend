import Login from '../Containers/Login';
import AcceptInvitation from '../Containers/AcceptInvitation';
import ResetPassword from '../Containers/ResetPassword';

const publicRoutes = [
  {
    path: '/',
    exact: true,
    component: Login,
  },
  {
    path: '/reset-password',
    exact: true,
    component: ResetPassword,
  },
  {
    path: '/invitation/:token',
    exact: true,
    component: AcceptInvitation,
  },
];

export default publicRoutes;
