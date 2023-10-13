import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../components/Home/Home.jsx";
import Blog from "../components/Blog/Blog.jsx";
import Contact from "../components/Contact/Contact.jsx";
// import About from "../components/About/About.jsx";
import Login from "../components/Login/Login/Login.jsx";
import Register from "../components/Login/Register/Register.jsx";
import ErrorPage from "../components/ErrorPage/ErrorPage.jsx";
import ChefDetails from "../components/ChefDetails/ChefDetails/ChefDetails.jsx";



const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
           /*  {
                path:'/about',
                element:<About></About>
            }, */
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:"/chef-recipes/:id",
                element:<ChefDetails></ChefDetails>,
                loader:({params}) => fetch(`http://localhost:5000/chef-recipes/${params.id}`)
            }
        ]
    }
])

export default router;