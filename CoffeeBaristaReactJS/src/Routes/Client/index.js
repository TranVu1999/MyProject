import HomePage from '../../Pages/ClientPage/HomePage';
import AccountPage from '../../Pages/ClientPage/AccountPage';

const routesClient = [
    {
        exact: true,
        path: "/",
        component: HomePage
    },
    {
        exact: false,
        path: "/account",
        component: AccountPage
    }
]

export default routesClient;