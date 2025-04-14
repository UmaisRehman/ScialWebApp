import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';


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
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <div>
    <RouterProvider router={router} />
 
  </div>
);
