import Bookmark from "./pages/bookmark";
import Movies from "./pages/movies/";
import Home from "./pages/home";
import Error from "./pages/error";
import Tv_Series from "./pages/tv-series"; 
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>, 
        errorElement:<Error/> 
    },
    {
        path:'/movies',
        element:<Movies/>,
        errorElement:<Error/>
    },
    {
        path:'/tv-series',
        element:<Tv_Series/>,
        errorElement:<Error/>
    },
    {
        path:'/bookmark',
        element:<Bookmark/>,
        errorElement:<Error/>
    },
])