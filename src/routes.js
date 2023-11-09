import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
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
                path:'/gallery',
                element:<Gallery />
            }
        ]
    }
];







export default routes;