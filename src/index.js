import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About';
import ProjectDetails from './Pages/ProjectDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);
