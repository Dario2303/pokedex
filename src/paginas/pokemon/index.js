import React, { useEffect, useState } from 'react'
import '../pokemon/pokemon.css'
import HeaderTarjeta from '../../componentes/headertarjeta/HeaderTarjeta'
import { useParams } from 'react-router-dom'
import pokeball from '../../imagenes/Pokeball.png'
import '../../componentes/colorPorEstilo/colorPorEstilo.css'
import BotonesTarjeta from '../../componentes/botonestarjeta/botonesTarjeta'
import Data from '../../componentes/data/data'

const Pokemon = () => {

  const [detallePokemon, setDetallePokemon] = useState([]);
    const {id}= useParams ()

  useEffect(() => {
    llamarPokemon();
    }, [])

  const llamarPokemon = () => {
    fetch (`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
    .then (res => res.json())
    .then ((llamado) => {
      setDetallePokemon(llamado)
      }
    )
    .catch ((error) => {
      console.log(error)
    })
  }

  return (
  <>
    <img src={pokeball} alt='pokeball_tarjeta' className='absolute opacity-10 ml-[200px] mt-[20px]'/>
    
    <div className='absolute w-[230px] h-[230px] ml-[110px] mt-[120px]'>
      <img src={detallePokemon.image} alt="img_pokemon"></img>
    </div>
    

    <div className={`${detallePokemon.types && detallePokemon.types[0].type.name} pokemon border-[#c2c2c2] flex flex-col p-[5px]`}>
    <HeaderTarjeta name={detallePokemon?.name} id={detallePokemon?.id}/>
        <div className='w-auto h-[550px] pt-[105px] bg-white rounded-lg mt-auto flex flex-col items-center'>
          <BotonesTarjeta color={detallePokemon.types && detallePokemon.types[0].type.name} types={detallePokemon.types && detallePokemon.types[0].type.name}/>
          <h1 className={`mt-[10px] font-bold text-xl ${detallePokemon.types && detallePokemon.types[0].type.name}f`}>About</h1>
          <div>
            <Data color={`mt-[10px] font-bold text-xl text-center ${detallePokemon.types && detallePokemon.types[0].type.name}f`}
            colorBase={`${detallePokemon.types && detallePokemon.types[0].type.name}f`}/>
        </div>
      </div>
    </div>
  </>
  )
}


export default Pokemon;
