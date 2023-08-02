import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main/Main.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import getJobId from './components/Utilities/JobDetails.js';

const router = createBrowserRouter([
  {
    path: '/',
    element:<Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader : () => fetch('http://127.0.0.1:5173/data.json')
      },
      {
        path: 'job/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params}) => getJobId(params.id)
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
