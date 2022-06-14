import React from 'react'

const Nombre = (props) => {


  return (
      <div className='w-full h-full static rounded-b-lg'>
        <p className='text-center text-sm'>{props.pokemon.name}</p>
      </div>
  )
}

export default Nombre
