import { createBrowserRouter } from 'react-router'
import App from './App';
import Register from './Register';
import Dashboard from './Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]);

export default router;