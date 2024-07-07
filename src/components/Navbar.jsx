import React from 'react'

const Navbar = () => {
  return (

        
    <div>
        <nav className="logo flex justify-around w-full text-white  bg-indigo-700 h-10 items-center ">
            <span className='font-bold text-xl'>iTask</span>
            <ul className='flex gap-10 cursor-pointer'>
                <li className='hover:font-bold transition-all'>Home</li>
                <li className='hover:font-bold transition-all'>Your Tasks</li>
            </ul>
        </nav>
       
     
    </div>
    
  )
}

export default Navbar