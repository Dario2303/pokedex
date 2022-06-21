import Header from '../../componentes/header/header';
import Buscador from '../../componentes/buscador/buscador';
import Lista from '../../componentes/lista/lista';
import './principal.css';
import { useState, useEffect } from 'react';



const Principal = () => {

  const [busqueda, setBusqueda] = useState('')
  const [pokemones, setPokemones] = useState([]);
  const [pokemonesOriginales, setPokemonesOriginales] = useState([]);    

    console.log(pokemonesOriginales)
  useEffect(() => {
    llamarApi();
    }, [])

    
  const llamarApi = () => {
    fetch ('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')
    .then (res => res.json())
    .then ((llamado) => {
      setPokemones(llamado)
      setPokemonesOriginales(llamado)
      }
    )
    .catch ((error) => {
      console.log(error)
    })
  }


  // .sort((a,b) => b.id-a.id)
  // .sort((a, b) => a.name.localeCompare(b.name))



  return (
    <div className='principal border-[#c2c2c2]'>
      <div className='mx-[10px] pt-[25px]'>
        <Header/>
        <Buscador setBusqueda={setBusqueda}/>
        <Lista pokemones={pokemones.filter((pokemon) => pokemon.name.match(busqueda))}/>
      </div>
      
    </div>
  )
}

export default Principal
