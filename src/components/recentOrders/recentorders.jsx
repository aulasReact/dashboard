import React from 'react';
import "./index.scss";

function Recentordens() {
    return (
        <div>
            <table className='tabela'>
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
                        <td className='td-img'>
                            <img src="../images/produto-lente.svg" alt="Camera Lens" />
                            Camera Lens
                        </td>
                        <td>$178</td>
                        <td className='td-icone'>
                            <div className='icone-tabela'>
                                325
                            </div>
                        </td>
                        <td>$1,46,660</td>
                    </tr>
                    <tr>
                        <td>#876368</td>
                        <td className='td-img'>
                            <img src="../images/produto-vestido.svg" alt="Black Sleep Dress" />
                            Black Sleep Dress
                        </td>
                        <td>$14</td>
                        <td className='td-icone'>
                            <div className='icone-tabela'>
                                325
                            </div>
                        </td>
                        <td>$46,660</td>
                    </tr>
                    <tr>
                        <td>#876368</td>
                        <td className='td-img'>
                            <img src="../images/produto-oleo.svg" alt="Argan Oil" />
                            Argan Oil
                        </td>
                        <td>$21</td>
                        <td className='td-icone'>
                            <div className='icone-tabela'>
                                78
                            </div>
                        </td>
                        <td>$3,46,676</td>
                    </tr>
                    <tr>
                        <td>#876368</td>
                        <td className='td-img'>
                            <img src="../images/produto-perfume.svg" alt="EAU DE Parfum" />
                            EAU DE Parfum
                        </td>
                        <td>$32</td>
                        <td className='td-icone'>
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
