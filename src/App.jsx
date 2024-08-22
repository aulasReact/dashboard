import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './components/Home/Home';
import InvoiceList from './components/InvoiceList/InvoiceList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

