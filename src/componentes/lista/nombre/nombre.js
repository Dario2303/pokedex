import '../../colorPorEstilo/colorPorEstilo.css';

const Nombre = (props) => {

  return (
      <div className={`w-full h-full static rounded-b-lg ${props.pokemon.types[0].type.name}`}>
        <p className='text-center text-sm'>{props.pokemon.name}</p>
      </div>
  )
}

export default Nombre
