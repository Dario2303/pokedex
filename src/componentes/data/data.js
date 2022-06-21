import React from 'react'
import AboutDetalle from './aboutDetalle/aboutDetalle'
import AboutDescripcion from './aboutDescripcion/aboutDescripcion'
import Atributos from './atributos/atributos'

const Data = (props) => {
  return (
    <div>
        <AboutDetalle/>
        <AboutDescripcion/>
        <h1 className={props.color}>Base Stats</h1>
        <Atributos colorBase={props.colorBase} 
                    colorBar={props.colorBar}/>
    </div>
  )
}

export default Data
