import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
    { value: 40, label: 'Sales', color: '#5B93FF' },
    { value: 60, label: 'Distribute', color: '#FFD66B' },
    { value: 15, label: 'Return', color: '#FF8F6B' },

];

const size = {
    width: 400,
    height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 35,
}));

function PieCenterLabel({ children }) {
    const { width, height, left, top } = useDrawingArea();
    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
        </StyledText>
    );
}

function Analytics() {

    return (
        <>
            <div className='div-main-analitico' >
                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', margin: '10px' }}>
                    <h1 style={{ fontSize: '22px' }}>Analytics</h1>
                    <img src="../images/3ponto.svg" />
                </div>
                <div>
                    <PieChart series={[{ data, innerRadius: 80, outerRadius: 100, cornerRadius: 26, endAngle: 290, }]} {...size}
                        margin={{ left: 100 }}

                        slotProps={{
                            legend: { hidden: true },

                        }}
                    >
                        <PieCenterLabel>80% </PieCenterLabel>
                    </PieChart>
                </div>
                <div className='div-12'>
                    <div className='div-analitico-principal'>

                        <div className='div-analitico-sales'>
                        </div>
                        <p>Sales</p>

                        <div className='div-analitico-distribute'>
                        </div>
                        <p>Distribute</p>
                        <div className='div-analitico-return'>
                        </div>
                        <p>Return</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Analytics