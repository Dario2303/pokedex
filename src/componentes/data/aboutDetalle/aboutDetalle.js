import React from 'react'
import Weight from '../../../imagenes/Weight.svg';
import Height from '../../../imagenes/Height.svg';

const AboutDetalle = () => {
  return (
    <div className='flex items-center justify-center'>

        <div className='border-r-4 border-[#e0e0e0] flex flex-col items-center justify-between h-[70px] w-[110px]'>
          <div className='flex w-full justify-center pt-[10px]'>
            <img src={Weight} className='w-[20px]'/>
            <p className='pl-[10px]'>6,9 kg</p>
          </div>
          <div>
            <p className='text-[10px]'>Weight</p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between h-[70px] w-[110px]'>
          <div className='flex w-full justify-center pt-[10px]'>
            <img src={Height} className='w-[10px]'/>
            <p className='pl-[10px]'>0,7 m</p>
          </div>
          <div>
            <p className='text-[10px]'>Weight</p>
          </div>
        </div>

        <div className='border-l-4 border-[#e0e0e0] flex flex-col items-center justify-between h-[70px] w-[110px]'>
          <div className='flex w-full justify-center'>
            <p className='text-center'>Chiorophyll Overgrow</p>
          </div>
          <div>
            <p className='text-[10px]'>Weight</p>
          </div>
        </div>


    </div>
  )
}

export default AboutDetalle
