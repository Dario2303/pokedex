import Header from '../../componentes/header/header';
import Buscador from '../../componentes/buscador/buscador';
import Lista from '../../componentes/lista/lista';
import './principal.css';
import { useEffect } from 'react';
import { useState } from 'react';



const Principal = () => {
      const [busqueda, setBusqueda] = useState('');
      const [pokemones, setPokemones] = useState([]);
      const numeroDePokemones = 10;


      useEffect(() => {
            llamarPokemones();
          }, []);

        const llamarPokemones = () => {
          for(let codigo=1;codigo <= numeroDePokemones;  codigo++)  {
            fetch (`https://pokeapi.co/api/v2/pokemon/${codigo}`)
            .then (res => res.json())
            .then ((pokemon) => {
              setPokemones(pokemones => [...pokemones,pokemon])
              console.log('hola')

              }
            )
              .catch ((error) => {
                console.log(error)
              })
            }
        }


      return (
        <div className='principal border-[#c2c2c2]'>
          <div className='mx-[10px] pt-[25px]'>
            
            <Header/>
            <Buscador setBusqueda={setBusqueda}/>
            <Lista 
              data={pokemones.filter((pokemon) => pokemon.name.match(busqueda))}/>
          </div>
        </div>

      )
  
}

export default Principal;
