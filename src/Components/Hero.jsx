import React from 'react'
import Typed from 'react-typed';


export default function Hero() {
  return (
    <div className='w-full py-[100px]'>

    <div className='max-w-[1240px] mx-auto'>

    <div className='mx-11'>
            <h1 className='font-bold text-5xl'>Find <Typed className='text-blue-700'
                    strings={['Partners (CAs)']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                /> <br/>available online</h1>
     
       <h3 className='mt-6 text-gray-600'><span className='text-slate-400 font-bold'>CONNECT</span> with us where your services are listed and visible to a myriad <br/>of businesses seeking CA’s for compliance support</h3> 
       



<div>
<img className="md:h-[270px] ml-[650px] mt-[-230px]" src="https://img.freepik.com/premium-photo/free-photo-good-looking-business-woman-with-arms-crossed_512531-591.jpg" alt="CA professional"></img>

</div>




       </div>


    </div>
    
    </div>
  )
}
