import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './components/Home/Home';
import InvoiceList from './components/InvoiceList/InvoiceList';
import HomePage from './components/AtomicDesign/Templates/HomePage/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/invoice-list",
    element: <InvoiceList />,
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App

