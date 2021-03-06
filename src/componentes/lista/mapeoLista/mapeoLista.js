import React from 'react'
import Numero from '../numeroPokemon/numero'
import Nombre from '../nombre/nombre';
import Imagen from '../imagen/imagen';
import { Link } from 'react-router-dom';

const MapeoLista = (props) => {

  return (

    <Link to={`/pokemon/${props.pokemon.id}`}>
      <div className='bg-[#ffffff] flex flex-col border-solid items-center w-[120px] 
      h-[120px] rounded-xl border-[1px]'>
          <Numero
              numero={props.pokemon.id}
          />
          <Imagen
              imagen={props.pokemon.image}
          />
          <Nombre
              nombre={props.pokemon.name}
              pokemon={props.pokemon}
          />
      </div>
    </Link>   
  )
}

export default MapeoLista;
