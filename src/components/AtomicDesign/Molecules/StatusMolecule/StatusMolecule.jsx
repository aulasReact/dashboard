import React from 'react'
import StatusCard from '../../Atoms/StatusCard/StatusCard'
import './index.scss'

function StatusMolecule() {
    return (
        <div className='statusMolecule'>
            <StatusCard icon_bg_color="#5b93ff50" icon_url="images/coracao.svg" title="178+" subtitle="Save Products" />
            <StatusCard icon_bg_color="#FFD66B50" icon_url="images/controleremoto.svg" title="20+" subtitle="Stock Products" />
            <StatusCard icon_bg_color="#FF8F6B50" icon_url="images/bolsa.svg" title="190+" subtitle="Sales Products" />
            <StatusCard icon_bg_color="#605BFF50" icon_url="images/mala.svg" title="12+" subtitle="Job Application" />
        </div>
    )
}

export default StatusMolecule