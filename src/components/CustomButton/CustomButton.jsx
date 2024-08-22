import { Add, Tune } from '@mui/icons-material'
import React from 'react'
import './index.scss'

export function AddButton({ text }) {
    return (
        <a className='customButton'>
            <Add />
            <p>{text}</p>
        </a>
    )
}

export function FilterButton({ text }) {
    return (
        <a className='customButton'>
            <p>{text}</p>
            <Tune />
        </a>
    )
}

