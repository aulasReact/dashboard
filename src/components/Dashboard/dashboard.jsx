import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import "../Dashboard/index.scss"
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import Roport from '../charts/report';
import Analytics from '../charts/analytics';
import Recentordens from '../recentOrders/recentorders';
import { Divider } from '@mui/material';


function Dashboard() {
    return (
        <>
            <div className='conteudo-maior'>
                <div className='content-dashboard'>
                    <h1>Dasboard</h1>
                    <div className='menu-data'>
                        <div className='menu-data1'>
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
                        <div className='menu-data1'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        format="DD/MM/YYYY"
                                        value={dayjs()}
                                        onChange={(newValue) => console.log(newValue.format('DD/MM/YYYY'))}
                                        label="Data Final" />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card1'>
                        <div className='card-icone-coracao'>
                            <img src="./images/coracao.svg" />
                        </div>
                        <div>
                            <h1 className='card-h1'>178+</h1>
                            <p className='card-p'>Save Products</p>
                        </div>

                    </div>
                    <div className='card1'>
                        <div className='card-icone-controle'>
                            <img src="./images/controleremoto.svg" />
                        </div>
                        <div>
                            <h1 className='card-h1'>20+</h1>
                            <p className='card-p'>Stock Products</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <div className='card-icone-bolsa'>
                            <img src="./images/bolsa.svg" />
                        </div>
                        <div>
                            <h1 className='card-h1'>190+</h1>
                            <p className='card-p'>Sales Products</p>
                        </div>
                    </div>
                    <div className='card1'>
                        <div className='card-icone-mala'>
                            <img src="./images/mala.svg" />
                        </div>
                        <div>
                            <h1 className='card-h1'>12+</h1>
                            <p className='card-p'>Job Application</p>
                        </div>
                    </div>
                </div>
                <div className='menu-reports'>
                    <div style={{ width: '100%', background: "#FFF", height: '408px', marginTop: '10px', borderRadius: '10px' }}>
                        <Roport />
                    </div>

                    <div style={{ width: '447px', background: "#FFF", height: '408px', marginTop: '10px', borderRadius: '10px' }}>
                        <Analytics />
                    </div>
                </div>


                <div className='menu-reports'>
                    <div style={{ background: "#FFF", marginTop: '10px', borderRadius: '10px' }}>
                        <Recentordens />
                    </div>
                    <div style={{ background: "#FFF", marginTop: '10px', borderRadius: '10px' }}>
                        <div style={{ width: '447px', background: "#FFF", height: '100%', marginTop: '10px', borderRadius: '10px' }}>
                            <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', margin: '10px' }}>
                                <h1 style={{ fontSize: '18px' }}>Top selling Products</h1>
                                <img src="../images/3ponto.svg" />
                            </div>
                            <div className='top-selleing'>
                                <img src="../images/tenis.svg" alt="" />
                                <div className='top-selleing-detalhes'>
                                    <p>NIKE Shoes Black Pattern</p>
                                    <img src="../images/estrelas.svg" alt="" />
                                    <h2>$87</h2>
                                </div>
                            </div>
                            <Divider />
                            <div className='top-selleing'>
                                <img src="../images/iphone.svg" alt="" />
                                <div className='top-selleing-detalhes'>
                                    <p>Iphone 12</p>
                                    <img src="../images/estrelas.svg" alt="" />
                                    <h2>$987</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Dashboard