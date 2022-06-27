import React from 'react'
import Numero from '../numeroPokemon/numero'
import Nombre from '../nombre/nombre';
import Imagen from '../imagen/imagen';
import { Link } from 'react-router-dom';

const Card = (props) => {

  return (

    <Link to={`/pokemon/${props.data?.id}`}>
      <div className='bg-[#ffffff] flex flex-col border-solid items-center m-[3px] w-[120px] 
      h-[120px] rounded-xl border-[1px]'>
          <Numero
              numero={props.data?.id}
              type={props.data?.types[0].type?.name}
          />
          <Imagen
              imagen={props.data?.id}
          />
          <Nombre
              nombre={props.data?.name}
              type={props.data?.types[0].type?.name}
          />
      </div>
    </Link>   
  )
}

export default Card;
