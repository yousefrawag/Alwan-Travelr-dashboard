import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppRoutes from './routes/AppRoutes';
import './css/style.css';
import './css/satoshi.css';
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    }
  }
})
ReactDOM.createRoot(document.getElementById('root') ).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
      <AppRoutes />
      <Toaster position='top-center'  gutter={12} containerStyle={{margin:"8px"}} toastOptions={{
          success:{
            duration:4000,
          },
          error:{
            duration:5000,
          },
          style:{
            fontSize:"14px",
            maxWidth:"600px",
            padding:"15px",
            
          
          }
        }} />
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
     
     
  </React.StrictMode>,
);
