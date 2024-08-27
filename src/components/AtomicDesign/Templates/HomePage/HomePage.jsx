import React from 'react'
import MenuLateral from '../../Organism/MenuLateral/MenuLateral'
import HomePageContent from '../../Organism/HomepageContent/HomePageContent'
import './index.scss'

function HomePage() {
    return (
        <div className='homePage'>
            <MenuLateral />
            <HomePageContent />
        </div>
    )
}

export default HomePage