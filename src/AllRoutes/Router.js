import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../component/Page/Home';
import Login from "../component/Page/Login";
import Courses from "../component/Page/Courses";
import Register from '../component/Page/Register';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
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
           }
        ]
    }
])

export default router;