import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:'/',
        element: <Home />,
        loader: () => fetch('tshirts.json')
      },
      {
        path: '/review',
        element:<OrderReview />
      },
      {
        path: '/grandpa',
        element: <Grandpa />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
)
