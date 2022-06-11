import React from 'react'
import Header from '../../componentes/header/header';
import Buscador from '../../componentes/buscador/buscador';
import Lista from '../../componentes/lista/lista';
import './principal.css';


const Principal = () => {
  return (
    <div className='principal'>
      <div className='mx-[10px] pt-[25px]'>
        <Header/>
        <Buscador/>
        <Lista/>
      </div>
    </div>
  )
}

export default Principal
