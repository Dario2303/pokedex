import React from 'react'

const Atributos = (props) => {


  return (
    <div className='flex'>
        <div className='grid grid-cols-2 grid-rows-1 h-full w-[120px]'>
            <div className={`text-right border-r-2 border-[#e0e0e0] pr-[10px] ${props.colorBase}`}>
                <p>HP</p>
                <p>ATK</p>
                <p>DEF</p>
                <p>SATK</p>
                <p>SDEF</p>
                <p>SPD</p>
            </div>
            <div className='text-center'>
                <p>045</p>
                <p>049</p>
                <p>049</p>
                <p>065</p>
                <p>065</p>
                <p>045</p>
            </div>
        </div>
        <div className='grid grid-cols-1 grid-rows-6 w-full items-center'>

            <div className="relative pt-1"> 
                <div className={`bg-blue-100 overflow-hidden h-2 mb-4 text-xs flex rounded`}>
                    <div style={{ width: "45%" }} className={`${props.colorBar} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}>
                    </div>
                </div>
            </div>

            <div className="relative pt-1"> 
                <div className={`bg-blue-100 overflow-hidden h-2 mb-4 text-xs flex rounded`}>
                    <div style={{ width: "49%" }} className={`${props.colorBar} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}>
                    </div>
                </div>
            </div>

            <div className="relative pt-1"> 
                <div className={`bg-blue-100 overflow-hidden h-2 mb-4 text-xs flex rounded`}>
                    <div style={{ width: "49%" }} className={`${props.colorBar} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}>
                    </div>
                </div>
            </div>

            <div className="relative pt-1"> 
                <div className={`bg-blue-100 overflow-hidden h-2 mb-4 text-xs flex rounded`}>
                    <div style={{ width: "65%" }} className={`${props.colorBar} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}>
                    </div>
                </div>
            </div>

            <div className="relative pt-1"> 
                <div className={`bg-blue-100 overflow-hidden h-2 mb-4 text-xs flex rounded`}>
                    <div style={{ width: "65%" }} className={`${props.colorBar} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}>
                    </div>
                </div>
            </div>

            <div className="relative pt-1"> 
                <div className={`bg-blue-100 overflow-hidden h-2 mb-4 text-xs flex rounded`}>
                    <div style={{ width: "45%" }} className={`${props.colorBar} shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}>
                    </div>
                </div>
            </div>





        </div>
            





            {/* <progress value="45" max="100" className='h-[5px] w-full'></progress>
            <progress value="49" max="100" className='h-[5px] w-full'></progress>
            <progress value="49" max="100" className='h-[5px] w-full'></progress>
            <progress value="65" max="100" className='h-[5px] w-full'></progress>
            <progress value="65" max="100" className='h-[5px] w-full'></progress>
            <progress value="45" max="100" className='h-[5px] w-full'></progress> */}
    </div>
  )
}

export default Atributos
