import React from 'react'
import bulbasaur from '../../imagenes/bulbasaur.png';
import charmander from '../../imagenes/charmander.png';
import squirtle from '../../imagenes/squirtle.png';
import butterfree from '../../imagenes/butterfree.png';
import pikachu from '../../imagenes/pikachu.png';
import gastly from '../../imagenes/gastly.png';
import ditto from '../../imagenes/ditto.png';
import mew from '../../imagenes/mew.png';
import aron from '../../imagenes/aron.png';


const Lista = () => {

  const pokemones = [
    {nombre:'bolbasaur', numero:'001', color:'#74cb48', imagen:bulbasaur},
    {nombre:'charmander', numero:'004', color:'#F57d31', imagen:charmander},
    {nombre:'squirtle', numero:'007', color:'#6493EB', imagen:squirtle},
    {nombre:'butterfree', numero:'012', color:'#a7b723', imagen:butterfree},
    {nombre:'pikachu', numero:'025', color:'#f9cf30', imagen:pikachu},
    {nombre:'gastly', numero:'092', color:'#70559b', imagen:gastly},
    {nombre:'ditto', numero:'132', color:'#aaa67f', imagen:ditto},
    {nombre:'mew', numero:'152', color:'#fb5584', imagen:mew},
    {nombre:'mew', numero:'304', color:'#b7b9d0', imagen:aron},
  ]

  return (
    <div className='grid grid-cols-3 gap-2 justify-items-center'>
        {pokemones.map((pokemon) => (
        <div className='bg-white flex flex-col border-solid items-center w-[120px] h-[120px] rounded-xl border-[1px]'style={{borderColor:pokemon.color}}>
          <p className='text-xs ml-auto pr-[5px]' style={{color:pokemon.color}}>#{pokemon.numero}</p>
          <div className='w-[80px] h-[80px] flex justify-center items-center'>
            <img className='w-[80px] m-[5px]' src={pokemon.imagen}></img>
          </div>
          <div className='w-full h-full static rounded-b-lg' style={{backgroundColor:pokemon.color}}>
            <p className='text-center text-sm text-white'>{pokemon.nombre}</p>
          </div>
        </div>
          ))}
    </div>
  )

}

export default Lista
