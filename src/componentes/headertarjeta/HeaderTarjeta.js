import React from 'react'
import { Link } from 'react-router-dom'
import arrowleft from '../../imagenes/arrow-left.svg'

const HeaderTarjeta = () => {
  return (
    <div className='flex p-[10px]'>
        <Link to='/'>
            <img src={arrowleft}/>
        </Link>
        <h1>Aron</h1>
        <h1 className='ml-auto'>id</h1>
    </div>
  )
}

export default HeaderTarjeta
