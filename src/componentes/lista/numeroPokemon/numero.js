import React from 'react';

const Numero = (props) => {
  console.log(props.numero)

  return (
    <>
      <p className='text-xs ml-auto pr-[5px]'>#{props.numero}</p>
    </>
  )
}

export default Numero;