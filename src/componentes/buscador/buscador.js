import React from 'react'

const Buscador = (props) => {

  return (
    <div className='flex w-full h-[30px] my-[10px] rounded-[5px] border-[2px] border-solid items-center'>
      <i className="fa-solid fa-magnifying-glass p-[6px] text-[#c2c2c2]"></i>
        <input className='my-[10px] w-full' placeholder="Buscar Pokemon" type="text" onChange={(e) => 
          props.setBusqueda(e.target.value)}></input>
    </div>
  )
}

export default Buscador
