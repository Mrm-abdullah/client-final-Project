import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from './Routes/Routes.jsx';
import AauthProviders from './Providers/AauthProviders.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AauthProviders>
          <RouterProvider router={router} />
        </AauthProviders>
      </HelmetProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)
