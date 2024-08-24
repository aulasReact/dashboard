import React from 'react'
import "./index.scss"

function CardTag({texto, cor, corFundo}) {
  return (
   
    <div className='card-botao-p' style={{backgroundColor: corFundo,  color: cor }}>{texto}</div>


 
  )
}

export default CardTag