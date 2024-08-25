import React from 'react';
import "./index.scss";

function Recentordens() {
    return (
        <div style={{ width: '100%', background: "#FFF", height: '408px', marginTop: '10px', borderRadius: '10px' }}>
            <table className='tabela' >
                <thead>
                    <tr>
                        <th>Tracking no</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Total Order</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#876364</td>
                        <td>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="../images/produto-lente.svg" alt="Camera Lens" />
                                <p>Camera Lens</p>
                            </div>



                        </td>
                        <td>$178</td>
                        <td >
                            <div className='icone-tabela'>
                                325
                            </div>
                        </td>
                        <td>$1,46,660</td>
                    </tr>
                    <tr>
                        <td>#876368</td>
                        <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="../images/produto-vestido.svg" alt="Black Sleep Dress" />
                                <p>Black Sleep Dress</p>
                            </div>

                        </td>
                        <td>$14</td>
                        <td>
                            <div className='icone-tabela'>
                                325
                            </div>
                        </td>
                        <td>$46,660</td>
                    </tr>
                    <tr>
                        <td>#876368</td>
                        <td >




                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="../images/produto-oleo.svg" alt="Argan Oil" />
                                <p>  Argan Oil</p>
                            </div>
                        </td>
                        <td>$21</td>
                        <td >
                            <div className='icone-tabela'>
                                78
                            </div>
                        </td>
                        <td>$3,46,676</td>
                    </tr>
                    <tr>
                        <td>#876368</td>
                        <td>


                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <img src="../images/produto-perfume.svg" alt="EAU DE Parfum" />
                                <p>     EAU DE Parfum</p>
                            </div>


                        </td>
                        <td>$32</td>
                        <td>
                            <div className='icone-tabela'>
                                98
                            </div>
                        </td>
                        <td>$3,46,981</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Recentordens;
