import React from 'react'
import { GridView, InsertChart, ConfirmationNumber, Article, CalendarMonth, Timeline, Notifications, Settings, Logout } from '@mui/icons-material';
import "./index.scss"

function MenuLateral() {
    return (
        <>
            <div className='content'>
                <div className='teste'>
                    <div className='menu-lateral'>
                        <img src='/images/logo.svg' />
                        <a href='/'><GridView htmlColor='#777777' fontSize='medium' /></a>
                        <a><InsertChart htmlColor='#777777' fontSize='medium' /></a>
                        <a href='/invoice-list'><ConfirmationNumber htmlColor='#777777' fontSize='medium' /></a>
                        <a href='/board-list'><Article htmlColor='#777777' fontSize='medium' /></a>
                        <a><CalendarMonth htmlColor='#777777' fontSize='medium' /></a>
                        <a><Timeline htmlColor='#777777' fontSize='medium' /></a>
                        <a><Notifications htmlColor='#777777' fontSize='medium' /></a>
                        <a><Settings htmlColor='#777777' fontSize='medium' /></a>
                    </div>
                    <div className='menu_perfil'>
                        <img src="/images/perfil.svg" alt="Logo Perfil" />
                        <a><Logout htmlColor='#777777' fontSize='medium' /></a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default MenuLateral