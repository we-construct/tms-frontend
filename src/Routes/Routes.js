import Login from "../Containers/Login";
import AcceptInvitation from "../Containers/AcceptInvitation";

const routes = [
    {
        path: "/",
        exact: true,
        component: Login,
    },
    {
        path: "/invitation",
        exact: false,
        component: AcceptInvitation,
    },
];

export default routes;
