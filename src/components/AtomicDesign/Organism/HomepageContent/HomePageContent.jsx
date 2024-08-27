import React from 'react'
import DatePickerComponent from '../../Atoms/DatePicker/DatePickerComponent'
import './index.scss'
import StatusMolecule from '../../Molecules/StatusMolecule/StatusMolecule'


function HomePageContent() {
    return (
        <div className='homePageContent'>
            <div className='homePageContent__title'>
                <h1>Dashoboard</h1>
                <DatePickerComponent />
            </div>
            <div className='homePageContent__status'>
                <StatusMolecule />
            </div>
        </div>
    )
}

export default HomePageContent