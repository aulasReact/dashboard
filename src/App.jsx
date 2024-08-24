import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './components/Home/Home';
import InvoiceList from './components/InvoiceList/InvoiceList';
import BoardList from './components/BoardList/boardList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/invoice-list",
    element: <InvoiceList />,
  }
  ,
  {
    path: "/board-list",
    element: <BoardList />,
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App

