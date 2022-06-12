import React from 'react'

const Numero = (props) => {
  return (
    <>
      <p className='text-xs ml-auto pr-[5px]' style={{color:props.color}}>#{props.numero}</p>
    </>
  )
}

export default Numero;