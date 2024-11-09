import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../Home';
import Courses from '../pages/Courses';
import Instructor from '../pages/Instructor';

const mainRoutes = [
    {
        path:'/', element:<Home />,
    },
    {
        path: '/courses', element: <Courses />
    },
    {
        path: '/instructor', element: <Instructor />
    }
]

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: mainRoutes ,
    },
    {
        path: '/courses',
        element: <Courses />,
    },
    {
        path: '/instructor',
        element: <Instructor />,
    }

])

export default router;