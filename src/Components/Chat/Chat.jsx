import React from 'react'

export default function Chat() {




  return (
    <div>
      <button className="chatLogo w-[50px] bottom-4 right-4 absolute hidden">
        <img src="./src/assets/chat.png" alt="" />
      </button>

      <div className="chatBox border-2 h-[450px] w-[330px] bottom-4 right-4 absolute rounded-lg">

        <div className="navbar bg-slate-700 h-14 flex justify-between text-white rounded-t-lg">

          <div className=' p-2'>
            <img src="./src/assets/logo2.png" alt="" className='w-[120px] h-5' />
            <span className=' ml-6'>AI Assistant</span>
          </div>

          <div className='flex gap-4 items-center p-3'>
            <button className='minimize'><i class="fa-regular fa-window-maximize"></i></button>
            <button className='cancal'><i class="fa-solid fa-x"></i></button>
            <button className='maximize'><i class="fa-solid fa-window-minimize" className=' hidden'></i></button>
          </div>

        </div>

        <div className='messageBox h-8 w-[100%] border-t-2 bottom-4 absolute'>
          <div className='flex justify-around items-end'>
            <input type="text" placeholder='Enter your message...' className=' border-0 focus:outline-none' />

            <button className=' bg-sky-600 text-white mt-2 w-8 h-8 rounded-Radius flex justify-center items-center'><i class="fa-regular fa-paper-plane"></i></button>

          </div>
        </div>

      </div>
    </div>
  )
}
