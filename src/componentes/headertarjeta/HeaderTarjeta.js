import React from 'react'
import { Link } from 'react-router-dom'

const HeaderTarjeta = (props) => {
  return (
    <>
      <div className='flex p-[10px]'>
          <Link to='/'>
              {/* <img className='pt-2 mr-5 text-white' src={arrowleft} alt="flecha_izq"/> */}
              <i className='text-xl fa-solid fa-arrow-left pt-2 mr-5 text-white'></i>

          </Link>
          <h1 className='text-3xl text-white'>{props.name}</h1>
          <h1 className='ml-auto text-3xl px-5 text-white'>#{props.id}</h1>
      </div>
      <Link to='/'>
            <i className='absolute mt-[130px] ml-[390px] text-2xl fa-solid fa-angle-right text-white'></i>
        </Link>
    </>
  )
}

export default HeaderTarjeta

