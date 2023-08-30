import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { Box, Toolbar } from '@mui/material';
import AllRoutes from './utils/AllRoutes';
import { Outlet } from 'react-router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Toaster } from 'react-hot-toast';


const stripePromise = loadStripe(
  'pk_test_51N3e2JSIOp89KyYyPL1L1NAznrvMR2PrAMMpi5akZ7sH9fDVrrJRjOVYBJT0so0RjAcg8R5xSjKr14XbSI7rexIn00ThqrNOeV'
);

function App() {
  return (
    <>
      <Navbar/>
      <Toaster toastOptions={{className: 'toaster', style: {
        fontFamily:'monospace',
      padding: '16px',
    },}}/>
      <Toolbar sx={{height:{xs:'56px',sm:'64px',lg:'80px',md:'64px',xl:'100px'  }}} />
      <Elements stripe={stripePromise}>
      <AllRoutes/>
      <Box component="main">
        <Outlet/>
      </Box>
      </Elements>
    </>
  );
}

export default App;
