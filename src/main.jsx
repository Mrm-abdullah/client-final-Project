import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import AauthProviders from './Providers/AauthProviders.jsx';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AauthProviders>
        <RouterProvider router={router} />
      </AauthProviders>
    </HelmetProvider>
  </React.StrictMode>,
)
