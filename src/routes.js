import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";

const routes = [
    {
        path:'/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/about',
                element:<About />
            }
        ]
    }
];







export default routes;