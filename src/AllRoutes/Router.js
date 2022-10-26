import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../component/Page/Home';
import Login from "../component/Page/Login";
import Courses from "../component/Page/Courses";
import Register from '../component/Page/Register';
import ErrorPage from "../component/Page/ErrorPage";
import PrivateRoute from '../AllRoutes/PrivateRoute';
import Blog from "../component/Page/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses'),
            },
           {
            path: '/login',
            element: <Login></Login>
           },
           {
            path: '/register',
            element: <Register></Register>
           },
           {
            path: '/blog',
            element: <PrivateRoute><Blog></Blog></PrivateRoute>
           }
        ]
    }
])

export default router;