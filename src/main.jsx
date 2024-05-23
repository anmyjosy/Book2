import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Loginpage from './pages/Loginpage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Aboutpage from './pages/Aboutpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>},
    {path:'login',
    element:<Loginpage/>
  },
  {path:'*',
    element:<ErrorPage/>
  },
  {path:'aboutt',
    element:<Aboutpage/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
