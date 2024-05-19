import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import AauthProviders from './Providers/AauthProviders.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AauthProviders>
      <RouterProvider router={router} />
    </AauthProviders>
  </React.StrictMode>,
)
