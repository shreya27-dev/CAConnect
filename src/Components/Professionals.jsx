import React from 'react'
import NavBar from './NavBar'
import {AiFillStar} from "react-icons/ai";
import {BsFillCalendarCheckFill} from "react-icons/bs";
import Footer from './Footer';



export default function Professionals() {
  return (
    <div>
    <div className='NavBar'>
        <NavBar />
    </div>

    <div className='ml-[120px] mt-8'>
        <h1 className='text-3xl font-extrabold'>Leanne Graham</h1>
        <p className='font-medium text-sm mt-6'>I am here to provide my expertise in accounting <br/> and finance, which includes financial statements, <br/>
        economics, and auditing, all to assist <br/> you effectively</p>

        <div className='flex mt-5'>
        <p><AiFillStar className='float-left text-blue-700'/><h1 className='ml-5 text-sm font-normal text-black-800'><span className='text-blue-700 font-bold'>4.8</span>(89)</h1>
         </p>
        </div>

        <div className="bg-white-200 w-[350px] shadow-2xl rounded-lg p-6 mt-4">
     <div className='flex '>
     <h2 className="text-md font-semibold text-gray-800">Basic to complex tasks</h2>
     <p className='ml-12 text-sm font-bold text-black-800'>Rs.4,370</p>

     </div>
      
      <p className="text-gray-600 mt-2"><BsFillCalendarCheckFill className='float-left'/><h1 className='ml-7 text-sm font-bold text-black-800'>Delivers the job within 2 days</h1></p>
      <div className="mt-4">
        <div className="flex gap-3">
          <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Register</p>
          <p className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Chat</p>
          </div> 
      </div>
      </div>

      
      {/* other card */}
      
      <div className="bg-white-200 w-[350px] shadow-2xl rounded-lg p-6 mt-12">
            
            <h1 className='font-extrabold text-2xl'>What people say?</h1>
            <p className='font-medium text-normal text-left mt-3'>I cannot express enough gratitude for the support Micheal has provided in managing my personal 
            finances. Their attention to detail and deep understanding of financial markets has ensured that my 
            investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.
            </p>

      </div>
    </div>


  <div className='mt-[-670px] ml-[720px]'>

        <img className='object-cover h-[300px] rounded ' src='https://c0.wallpaperflare.com/preview/447/393/146/apple-coffee-cup-laptop.jpg' alt=''/>
        <h1 className=' mt-6 text-3xl font-bold'>About Leanne Graham</h1>

        <div className='flex gap-8 mt-5'>
            <div>
            <p className='font-extrabold text-xs text-gray-400'>FROM</p>
            <p className='text-sm font-medium mt-2'>LONDON</p>
            </div>
            <div>
            <p className='font-extrabold text-xs text-gray-400'>PARTNER SINCE</p>
            <p className='text-sm font-medium mt-2'>2011</p>
            </div>
            <div>
            <p className='font-extrabold text-xs text-gray-400'>AVERAGE RESPONSE TIME</p>
            <p className='text-sm font-medium mt-2'>30 MINUTES</p>
            </div>
    

        </div>
        <div>
        
        
        <div className='mt-10'>

                <h3 className='text-xs font-extrabold text-gray-400'>About</h3>
                <p className='font-medium mt-2'>I am a Professional Charted Accountant here to offer professional <br/> services of accounting 
                and finance, financial statements, <br/>Bookkeeping  in  affordable price.</p>


       </div>

       <div className='flex gap-[100px] mt-9 mb-12'>
        <div>
        <p className='text-xs font-extrabold text-gray-400'>SERVICE I OFFER</p>
         
         <ol className='mt-5 space-y-[6px] text-sm'>
            <li>Financial accounting</li>
            <li>Financial statements</li>
            <li>Bookkeeping</li>
            <li>Accounting and finance</li>
            <li>Corporate finance</li>
            <li>Maintain charts of accounts</li>
            <li>Profit and loss statements</li>
            <li>Bank reconcilation</li>
            <li>Balance sheets</li>
        </ol>
        </div>

        <div>
        <p className='text-xs font-extrabold text-gray-400'>WHY ME?</p>
        <ol className='mt-5 space-y-[6px] text-sm'>
            <li>One-time delivery</li>
            <li>24/7 customers support</li>
            <li>Error-free documents</li>
        </ol>

        
        </div>
       </div>
        </div>

        

       

    </div>

   
    <Footer/>


  
</div>
        

    
      
    
    
    
  )
}
