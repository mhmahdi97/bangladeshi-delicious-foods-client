import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthContextProvider from './routes/providers/AuthContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
