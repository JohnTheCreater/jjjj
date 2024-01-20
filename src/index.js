import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./tailwind.css";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Customers from './pages/Customers/customers';
import Home from './pages/Home/home';
import Dashboard from './pages/Dashboard/dashboard';

import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Report from './pages/Dashboard/Report/Report';
import BillGeneration from './pages/Customers/BillLayout/BillGeneration';
import RandM from './pages/RandM/RandM';



const DefaultRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return null;
};



const router = createBrowserRouter([

  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },


  {
    path: "/customers",
    element:<Customers/>,
  },
  {
   path:"/customers/billGeneration",
   element:<BillGeneration/>
  },
  {
    path: "*",
    element: <DefaultRedirect />,
  },
  {
    path:'dashboard/report',
    element:<Report/>
  },
  {
    path:'R&M',
    element:<RandM/>
  }
  
  
   
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
