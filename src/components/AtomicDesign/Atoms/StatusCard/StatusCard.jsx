import React from 'react'
import './index.scss'

function StatusCard({ icon_bg_color, icon_url, title, subtitle }) {
    return (
        <div className='statusCard'>
            <div className='statusCard__icon' style={{ backgroundColor: icon_bg_color }}>
                <img src={icon_url} />
            </div>
            <div className='statusCard__texts'>
                <p className='statusCard__texts-title'>{title}</p>
                <p className='statusCard__texts-subtitle'>{subtitle}</p>
            </div>
        </div>
    )
}

export default StatusCard