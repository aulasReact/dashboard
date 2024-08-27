import React from 'react'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './index.scss'

function DatePickerComponent() {
    return (
        <div className='datePicker'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        format="DD/MM/YYYY"
                        value={dayjs()}
                        onChange={(newValue) => console.log(newValue.format('DD/MM/YYYY'))}
                        label="Data Inicial" />
                </DemoContainer>
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                    <DatePicker
                        format="DD/MM/YYYY"
                        value={dayjs()}
                        onChange={(newValue) => console.log(newValue.format('DD/MM/YYYY'))}
                        label="Data Inicial" />
                </DemoContainer>
            </LocalizationProvider>
        </div>
    )
}

export default DatePickerComponent