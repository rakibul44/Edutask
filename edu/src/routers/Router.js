import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from '../Home';

const mainRoutes = [
    {
        path:'/', element:<Home /> ,
    }
]




const router =  createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: mainRoutes ,
    }
])

export default router;