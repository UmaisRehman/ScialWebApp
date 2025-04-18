import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import '../src/index.css'
import Blog from './Pages/Blog';
import Products from './Pages/Products';
import Pricong from './Pages/Pricong';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element:  <Home/>
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "products",
        element: <Products/>
      },
      
      {
        path: "blog",
        element: <Blog/>
      },
      
      {
        path: "pricing",
        element: <Pricong/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
