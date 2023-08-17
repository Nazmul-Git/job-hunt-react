/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import JobDetails from './Components/jobDetails/jobDetails';
import Home from './Components/Home/Home';
import FirstPage from './Components/firstPage/firstPage';







const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<FirstPage></FirstPage>
      },
      {
        path:'/statistics',
        element:<Home></Home>,
        loader: ()=>fetch('jobs.json')
      },
      {
        path:'/statistics/:jobId',
        element: <JobDetails></JobDetails>,
        loader: ()=>fetch('jobs.json')
        
      }
      

    ]
  }
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
