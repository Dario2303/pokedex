import React, { useEffect, useState } from 'react'
import '../pokemon/pokemon.css'
import aron from '../../imagenes/aron.png'
import HeaderTarjeta from '../../componentes/headertarjeta/HeaderTarjeta'
import { useParams } from 'react-router-dom'

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
      console.log(llamado)
      }
    )
    .catch ((error) => {
      console.log(error)
    })
  }

  return (
  <>
    <div className='absolute ml-[100px] mt-[120px]'>
      <img src={detallePokemon.image}></img>
    </div>

    <div className='pokemon border-[#c2c2c2] bg-blue-500 flex flex-col p-[5px]'>
    <HeaderTarjeta/>
        <div className='w-auto h-[450px] bg-white rounded-lg mt-auto'>
          {/* <BotonesTarjeta/> */}
          <h1></h1>
          <div>
            {/* <Data/> */}
          </div>
      </div>
    </div>
  </>
  )
}

export default Pokemon;
