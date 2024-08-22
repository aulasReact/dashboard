import React from 'react'
import MenuLateral from '../MenuLateral/MenuLateral'
import Dashboard from '../Dashboard/dashboard'

function Home() {
    return (
        <div className='content-main'>
            <MenuLateral />
            <Dashboard />
        </div>
    )
}

export default Home