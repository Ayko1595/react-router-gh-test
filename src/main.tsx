import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Test from './Test.tsx';
import Fun from './Fun.tsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/test",
      element: <Test />,
    },
    {
      path: "/fun",
      element: <Fun />,
    },
  ]);
  

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
