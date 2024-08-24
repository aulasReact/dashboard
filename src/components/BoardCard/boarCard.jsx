import React, { useState } from 'react';

import "./index.scss"
import { Avatar, AvatarGroup, Button } from '@mui/material';
import CardTag from './cardTag/cardTag';

function BoardCard() {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (

    <div className='card-borda-total'>

      <div className='card-titulo'>

        <div className='card-titulo-checkbox'>

        <div className="checkbox-wrapper-12">
          <div className="cbx">
            <input
              type="checkbox"
              id="cbx-12"
              checked={checked}
              onChange={handleChange}
            />
            <label htmlFor="cbx-12"></label>
            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
              <path d="M2 8.36364L6.23077 12L13 2"></path>
            </svg>
          </div>

          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo-12">
                <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                <feColorMatrix
                  result="goo-12"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                  mode="matrix"
                  in="blur"
                ></feColorMatrix>
                <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>

       

          <p className='card-titulo-p'>Dashboard Design </p>
        </div>
      
        <div>
          <img src="images/3ponto.svg" alt="IMG" />
        </div>
      </div>
    <div  className='card-botao'>
    <CardTag 
     texto="Low"
     cor="#FFF"
     corFundo="#FF6A77"
     
     />

<CardTag 
     texto="On Track"
     cor="#030229"
     corFundo="#FFD66B"
     
     />

    </div>
    
    <p>Discussion for management dashboard ui design</p>

    <div className='card-rodape'>
      <div>
      <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/5.jpg" />
      <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
    </AvatarGroup>

      </div>
      <div className='card-rodape-dir'>
       <img src="/images/card-pensamento.svg" alt="" />
       <p>112</p>
        <img src="/images/coracao01.svg" alt="" />
        <p>1.2k</p>
      </div>
    </div>

    </div>

  );
}

export default BoardCard