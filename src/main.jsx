import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import RouterConfig from '../routes/RouterConfig.jsx'
import { HelmetProvider } from 'react-helmet-async'

const qc =  new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={qc}>
      <BrowserRouter>
      <HelmetProvider>
      <App />
      <RouterConfig/>
      </HelmetProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
