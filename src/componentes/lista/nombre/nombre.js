import '../../colorPorEstilo/colorPorEstilo.css';

const Nombre = (props) => {

  return (
      <div className={`w-full h-full static rounded-b-lg ${props.type}`}>
        <p className='text-center text-sm'>{props.nombre}</p>
      </div>
  )
}

export default Nombre
