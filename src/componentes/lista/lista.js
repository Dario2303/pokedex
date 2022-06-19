import MapeoLista from './mapeoLista/mapeoLista';

   
  const Lista = (props) => {
    
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
export default Lista;