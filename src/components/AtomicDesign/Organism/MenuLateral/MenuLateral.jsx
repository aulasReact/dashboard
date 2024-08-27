import React from 'react'
import { GridView, InsertChart, ConfirmationNumber, Article, CalendarMonth, Timeline, Notifications, Settings, Logout } from '@mui/icons-material';
import "./index.scss"

function MenuLateral() {
    return (
        <div className='menuLateral'>
            <div className='menuLateral__content'>
                <div className='menuLateral__content-superior'>
                    <img src='/images/logo.svg' alt='Logo' className='menuLateral__content-superior_logo' />
                    <a href='/'><GridView htmlColor='#777777' fontSize='medium' /></a>
                    <a><InsertChart htmlColor='#777777' fontSize='medium' /></a>
                    <a href='/invoice-list'><ConfirmationNumber htmlColor='#777777' fontSize='medium' /></a>
                    <a><Article htmlColor='#777777' fontSize='medium' /></a>
                    <a><CalendarMonth htmlColor='#777777' fontSize='medium' /></a>
                    <a><Timeline htmlColor='#777777' fontSize='medium' /></a>
                    <a><Notifications htmlColor='#777777' fontSize='medium' /></a>
                    <a><Settings htmlColor='#777777' fontSize='medium' /></a>
                </div>
                <div className='menuLateral__content-inferior'>
                    <img src="/images/perfil.svg" alt="Logo Perfil" className='menuLateral__content-inferior_logo' />
                    <a><Logout htmlColor='#777777' fontSize='medium' /></a>
                </div>
            </div>
        </div>
    )
}

export default MenuLateral