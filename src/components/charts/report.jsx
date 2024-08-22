import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import "./index.scss"

function Report() {
    return (
        <>
            <h1 className='report'>Reports</h1>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={750}
                height={380}
            />
        </>
    )
}

export default Report