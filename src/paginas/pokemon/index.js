import React from 'react'
import '../pokemon/pokemon.css'
import aron from '../../imagenes/aron.png'
import HeaderTarjeta from '../../componentes/headertarjeta/HeaderTarjeta'

const Pokemon = () => {
  return (
  <>
    <div className='absolute ml-[100px] mt-[120px]'>
      <img src={aron}></img>
    </div>

    <div className='pokemon border-[#c2c2c2] bg-blue-500 flex flex-col p-[5px]'>
    <HeaderTarjeta/>
        <div className='w-auto h-[450px] bg-white rounded-lg mt-auto'>
          {/* <BotonesTarjeta/> */}
          <h1>About</h1>
          <div>
            {/* <Data/> */}
          </div>
      </div>
    </div>
  </>
  )
}

export default Pokemon;
