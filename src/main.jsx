/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useFetcher,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import App from './App';
import Users from './Component/Users/Users';
import UserDetails from './Component/UserDetails/UserDetails';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [

      {
        path: '/about', 
        element: <About></About>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
