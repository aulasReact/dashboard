import React from 'react'
import MenuLateral from "./components/menuLateral/"
import Dashboard from './components/Dashboard/dashboard'
import "./App.css"

function App() {


  return (
    <>
      <div className='content-main'>
        <MenuLateral />
        <Dashboard />
      </div>
    </>
  )
}

export default App

