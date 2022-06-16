import React, { useEffect, useState } from 'react'
// import bulbasaur from '../../imagenes/bulbasaur.png';
// import charmander from '../../imagenes/charmander.png';
// import squirtle from '../../imagenes/squirtle.png';
// import butterfree from '../../imagenes/butterfree.png';
// import pikachu from '../../imagenes/pikachu.png';
// import gastly from '../../imagenes/gastly.png';
// import ditto from '../../imagenes/ditto.png';
// import mew from '../../imagenes/mew.png';
// import aron from '../../imagenes/aron.png';
import MapeoLista from './mapeoLista/mapeoLista';

   
  const ApiPokemon = (props) => {
    
    
// const Lista = () => {

//   const pokemones = [
//     {nombre:'bolbasaur', numero:'001', color:'#74cb48', imagen:bulbasaur},
//     {nombre:'charmander', numero:'004', color:'#F57d31', imagen:charmander},
//     {nombre:'squirtle', numero:'007', color:'#6493EB', imagen:squirtle},
//     {nombre:'butterfree', numero:'012', color:'#a7b723', imagen:butterfree},
//     {nombre:'pikachu', numero:'025', color:'#f9cf30', imagen:pikachu},
//     {nombre:'gastly', numero:'092', color:'#70559b', imagen:gastly},
//     {nombre:'ditto', numero:'132', color:'#aaa67f', imagen:ditto},
//     {nombre:'mew', numero:'152', color:'#fb5584', imagen:mew},
//     {nombre:'aron', numero:'304', color:'#b7b9d0', imagen:aron},
//   ]
    const MostrarLista = () => {
        return(
          
          props.pokemones.map((pokemon) => 
          <MapeoLista
            nombre={pokemon.name}
            numero={pokemon.id}
            imagen={pokemon.image}
            pokemon={pokemon}
          />
          )
        )
      }

  return (
    
    <div className='grid grid-cols-3 gap-2 justify-items-center'>
        {MostrarLista()}
    </div>
  )
}
export default ApiPokemon;