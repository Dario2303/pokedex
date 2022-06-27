import Card from './mapeoLista/mapeoLista';

   
  const Lista = (props) => {
        return(  
        <div className='flex flex-wrap'>
            {props.data?.map((pokemon) => (
            <Card
              data={pokemon}
            />
          ))}

        </div>
      )
    }

export default Lista;