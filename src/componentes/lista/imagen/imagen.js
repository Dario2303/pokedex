import React from 'react'

const Imagen = (props) => {
  return (
        <div className='w-[80px] h-[80px] flex justify-center items-center'>
            <img className='w-[80px] m-[5px]' src={props.imagen}></img>
        </div>
  )
}

export default Imagen
