import React from 'react';
import '../../colorPorEstilo/colorPorEstilo.css';

const Numero = (props) => {

  return (
    <>
      <p className={`${props.type}f text-xs ml-auto pr-[5px]`}>#{props.numero}</p>
    </>
  )
}

export default Numero;