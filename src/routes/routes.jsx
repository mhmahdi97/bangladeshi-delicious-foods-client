import {createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ChefRecipes from "../pages/Home/ChefRecipes";
import ErrorPage from "../pages/Home/ErrorPage";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                path: '/chefs/:id',
                element:<ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-mhmahdi97.vercel.app/chef/${params.id}`)
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            },
        ]
    }
])

export default router;