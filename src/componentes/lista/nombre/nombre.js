import React from 'react'

const Nombre = (props) => {
  return (
      <div className='w-full h-full static rounded-b-lg' style={{backgroundColor:props.color}}>
        <p className='text-center text-sm text-white'>{props.nombre}</p>
      </div>
  )
}

export default Nombre
