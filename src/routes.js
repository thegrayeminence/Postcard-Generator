import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import SiteMain from "./pages/SiteMain";

const routes = [
    {
        path:'/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/',
                element:<SiteMain />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
];







export default routes;