import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import PostCardEditor from "./pages/PostCardEditor";

const routes = [
    {
        path:'/',
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/',
                element:<PostCardEditor />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
];







export default routes;