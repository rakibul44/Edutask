import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../Home';
import Courses from '../pages/Courses';
import Instructor from '../pages/Instructor';
import Events from "../pages/Events";
import Preview from '../pages/Preview';
import StudentDashboard from '../pages/StudentDashboard';


const mainRoutes = [
    {
        path:'/', element:<Home />,
    },
    {
        path: '/courses', element: <Courses />
    },
    {
        path: '/instructor', element: <Instructor />
    },
    {
        path: '/events', element: <Events />
    },
    {
        path: '/preview', element: <Preview />
    },
    { 
        path: '/student/dashboard', element: <StudentDashboard /> 
    }
    
]

// const dashbooardRoutes =[

//     {
//         path:'', element:<Dashboard />,
//     }

// ]

const router =  createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: mainRoutes ,
    },
    // {
    //     path: '/courses',
    //     element: <Courses />,
    // },
    // {
    //     path: '/instructor',
    //     element: <Instructor />,
    // }
    // {
    //     path: '/events',
    //     element: <Events />,
    // }
    // {
    //     path: '/preview', element: <Preview />
    // }

])

export default router;