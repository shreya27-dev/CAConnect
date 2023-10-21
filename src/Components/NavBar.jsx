import React, { useState } from 'react';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";
import {FaBlackTie} from "react-icons/fa";
import {useNavigate } from 'react-router-dom';

export default function NavBar() {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
  return (

        <div className='bg-[#FFFFFF] p-4'> 
        <div className='max-w-[1240px] py-[20px] items-center flex justify-between mx-auto cursor-pointer'>

        <div>
        <ul className='flex items-center mx-5 gap-4 text-sm font-bold'><FaBlackTie/>
        <li className='text-base' onClick={() =>{navigate("/")}}>ConnectCA</li>
            <li className=' hover:text-gray-500 text-black ml-6'>Solutions</li>
            <li className=' hover:text-gray-500 text-black'>Features</li>
            <li className='hover:text-gray-500 text-black'>Blogs</li>
            <li className='hover:text-gray-500 text-black'>About</li>
        </ul>

        
        </div>
        {
            toggle ? 
            <AiOutlineClose onClick={() => setToggle(!toggle)} className='md:hidden block'/> 
            :
            <AiOutlineMenu onClick={()  => setToggle(!toggle)} className='md:hidden block' /> 
            

        }
        


        <div>
        <ul className='hidden pd md:flex gap-x-7 text-sm font-bold '>
            <li className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Login</li>
            <li className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Register</li>
        </ul>

        <ul className={` duration-300 md:hidden mx-9 gap-8 bg-white w-full h-screen fixed top-[92px] text-sm font-bold
        ${toggle ? 'left-[0]': 'left-[-100%]'}
        `}>
            <li className=' hover:text-black text-blue-700'>Login</li>
            <li className='mt-3  hover:text-black text-blue-700'>Register</li>
        </ul>

    

        </div>


            </div>

        </div>
  )
}
