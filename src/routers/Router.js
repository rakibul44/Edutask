import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../Home';
import Courses from '../pages/Courses';

const mainRoutes = [
    {
        path:'/', element:<Home />,
    },
    {
        path: '/courses', element: <Courses />
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
    }

])

export default router;