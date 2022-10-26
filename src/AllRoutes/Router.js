import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../component/Page/Home';
import Login from "../component/Page/Login";
import Courses from "../component/Page/Courses";
import Register from '../component/Page/Register';
import ErrorPage from "../component/Page/ErrorPage";
import PrivateRoute from '../AllRoutes/PrivateRoute';
import Blog from "../component/Page/Blog";
import CourseDetails from "../component/Other/CourseDetails";
import Premium from "../component/Other/Premium";

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
                loader: ()=> fetch('https://music-album-woad.vercel.app/courses'),
            },
            {
                path: '/course/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`https://music-album-woad.vercel.app/course/${params.id}`)
            },
            {
                path: '/tutorial/:id',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,
                loader: ({params})=> fetch(`https://music-album-woad.vercel.app/course/${params.id}`)
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
            element:<Blog></Blog>
           }
        ]
    }
])

export default router;