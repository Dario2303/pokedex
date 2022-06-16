import Header from '../../componentes/header/header';
import Buscador from '../../componentes/buscador/buscador';
import Lista from '../../componentes/lista/lista';
import './principal.css';
import { useState, useEffect } from 'react';


const Principal = () => {

  const [busqueda, setBusqueda] = useState('')
  console.log(busqueda)

  const [pokemones, setPokemones] = useState([]);
  const [pokemonesOriginales, setPokemonesOriginales] = useState([]);    

  useEffect(() => {
    llamarApi();
    }, [])

    useEffect(() => {
      const texto = pokemonesOriginales.filter((pokemon) => {
        return pokemon.name === busqueda;
      })
      setPokemones(texto)

      }, [busqueda])


  const llamarApi = () => {
    fetch ('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')
    .then (res => res.json())
    .then ((llamado) => {
      setPokemones(llamado)
      setPokemonesOriginales(llamado)
      console.log(llamado.id)
      }
    )
    .catch ((error) => {
      console.log(error)
    })
  }

  return (
    <div className='principal border-[#c2c2c2]'>
      <div className='mx-[10px] pt-[25px]'>
        <Header/>
        <Buscador setBusqueda={setBusqueda}/>
        <Lista pokemones={pokemones}/>
      </div>
    </div>
  )
}

export default Principal
