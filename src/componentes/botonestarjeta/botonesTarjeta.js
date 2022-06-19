import React from 'react'
import BotonTarjeta from '../botonTarjeta/botonTarjeta'

const BotonesTarjeta = (props) => {

        return (  
            <div className='flex justify-center'>
                <BotonTarjeta types={props.types} color={props.color}/>    
            </div>   
            )
    

}
export default BotonesTarjeta
