//library/dependencies 
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react';


//pages/components/style
import routes from './routes';
import './styles/index.css';
import theme from './theme';


//router + root
const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ChakraProvider 
    theme={theme}
    >
    <RouterProvider 
    router={router}
    //fallbackElement={}
    />
    </ChakraProvider>
  </React.StrictMode>
);


