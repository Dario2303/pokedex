import React from 'react'
import pokeball from '../../imagenes/Pokeball.png';

const Header = () => {
  return (
    <div className='flex items-center'>
      <img className='w-[30px]' src={pokeball}/>
      <h1 className="font-['Poppins, sans'] font-bold text-2xl pl-[10px]">Pokédex</h1>
      <button className='ml-auto'>az</button>
    </div>
  )
}

export default Header
