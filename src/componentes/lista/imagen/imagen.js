import React from 'react'

const Imagen = (props) => {
  return (
        <div className='w-[80px] h-[80px] flex justify-center items-center'>
            <img className='w-[80px] m-[5px]' 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.imagen}.png`} 
          alt={props.nombre}></img>
        </div>
  )
}

export default Imagen
