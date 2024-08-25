import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';
import "./index.scss"

function Roport() {
    return (
        <div>
            <h1 className='report'>Reports</h1>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
               // width={1046}
               // height={380}
            />
        </div>
    )
}

export default Roport