import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Integrantes from './routes/Integrantes/index.jsx'
import Vistoria from './routes/Vistoria/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "vistoria",
        element: <Vistoria/>
      },
      {
        path: "/integrantes",
        element: <Integrantes/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
