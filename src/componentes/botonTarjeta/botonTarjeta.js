import React from 'react'
import '../colorPorEstilo/colorPorEstilo.css'

const BotonTarjeta = (props) => {
  return (
    <div className={`${props.color} w-auto text-white h-[30px] rounded-full px-[20px] items-center flex`}>
      <p>{props.types}</p>
    </div>
  )
}

export default BotonTarjeta

