import { createBrowserRouter } from 'react-router'
import App from './App';
import Blogs from './Blogs';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/posts',
        element: <Blogs />,
    }
]);

export default router;