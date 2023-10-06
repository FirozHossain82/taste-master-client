import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../components/Home/Home.jsx";
// import ErrorPage from '../components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default router;