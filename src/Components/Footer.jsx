import React from 'react'
import {FaBlackTie} from "react-icons/fa";

export default function Footer() {
  return (
    <>

    <div className=' mx-auto mt-60 bg-blue-700 p-4 max-w-full'>

    <div className='ml-10'>
        <h1 className='flex items-center mx-5 gap-4 text-sm font-bold text-white'><FaBlackTie className='text-white'/>ConnectCA©</h1>
        <p className='flex items-center mx-12 mt-2 gap-4 text-sm font-medium text-white'> India's first platform dedicated to <br/> simplifying partner search</p>
    </div>
    
    <div className='flex gap-16 mt-[-72px] ml-[380px] mb-7 gap-x-24'>
    <ul className='text-sm text-white'>
    <li className='font-semibold text-white mb-2'>COMPANY</li>
    <li>About</li>
    <li>Pricing</li>
    <li>Career</li>
    </ul>

    <ul className='text-sm text-white'>
    <li className='font-semibold text-white mb-2'>SOLUTIONS</li>
    <li>Search</li>
    <li>Connect</li>
    <li>Research</li>

    </ul>

    <ul className='text-sm text-white '>
    <li className='font-semibold text-white mb-2'>RESOURCES</li>
    <li>Blogs</li>
    <li>Forms</li>
    </ul>

    <ul className='text-sm text-white '>
    <li className='font-semibold text-white mb-2'>SUPPORT</li>
    <li>Helps</li>
    <li>Contact-us</li>
    </ul>

    <ul className='text-sm text-white '>
    <li className='font-semibold text-white mb-2'>LEGAL</li>
    <li>Privacy</li>
    <li>Terms</li>
    <li>Accessibility</li>

    </ul> 

    </div>

    <hr></hr>


    <div className='flex'>
        <div><p className='ml-[90px] mt-4 text-xs text-white font-light'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p></div>
        <div>
            <img className='w-[130px] mt-[-40px] ml-[520px] text-white' src='https://worldofprintables.com/wp-content/uploads/2020/12/Social-Icons-01-Free-SVG.png.webp' alt=''></img>
            
        </div>
    </div>
    

    


    </div>

   
      
    </>
  )
}
