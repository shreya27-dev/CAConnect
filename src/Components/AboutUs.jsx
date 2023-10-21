import React from 'react'
import {MdContentPasteSearch} from 'react-icons/md'
import {GrConnect} from 'react-icons/gr'
import {FiCheckCircle} from 'react-icons/fi'
import {BiBriefcase} from 'react-icons/bi'

export default function AboutUs() {
  return (
    <div className='max-w-[1240px] mx-auto mt-60'>
     <div>

     <h1 className='font-bold text-5xl'><span className='text-blue-700'>All-in-One</span> platform that <br/> Makes Easier</h1>
     <p className='font-semibold text2xl mt-5'>We are more than a platform; We are your <br/> success partner. Discover our services 
       to achieve <br/> your business and educational goals</p>

       <div className='block mt-32 gap-30 cursor-pointer '>
       <div className='flex gap-4 mb-24'>
          {/*expertise*/}
          <MdContentPasteSearch className='object-cover h-20 w-20 text-blue-700'/> <h2 className='mt-[20px]'>SEARCH for vital<br/> company information</h2> 
          <GrConnect className='object-cover h-20 w-20  ml-24'/> <h2 className='mt-[20px]'>CONNECT with the <br/> resources to meet <br/> your business needs</h2>
          </div>
          <div className='flex ml-15 gap-4'>
          <FiCheckCircle className='object-cover h-20 w-20 '/> <h2 className='mt-[20px]'>RESEARCH and <br/> generate reports <br/> that drive growth </h2>
          <BiBriefcase className='object-cover h-20 w-20 ml-24 text-blue-700'/> <h2 className='mt-[20px]'>ACADEMY to give you <br/> the skills for success <br/> in your career</h2>
          </div>

          

        </div>
       

     <div className="ml-[800px] mt-[-500px] mb-8">
     <img className='object-cover h-48 w-96' src='https://img.freepik.com/premium-photo/three-multicultural-students-sitting-with-laptops-white_562859-1429.jpg?w=740' alt='Students studying' />
     <div>
     <p className='p-[16px] rounded-full bg-pink-100 mt-10 text-left font-semibold'><em>Hey, check out ConnectCA services.</em></p>
     <p className='p-[16px] rounded-full bg-pink-100 mt-2 mr-20 font-semibold'><em>learned from their videos, got my first job.</em>I</p>
     <p className='p-[15px] rounded-full bg-pink-100 mt-2 mr-20 font-semibold'><em>You won't be disappointed with their services.</em></p>
     <p className='p-[15px] rounded-full bg-blue-200 mt-2 mr-20 font-semibold text-right'><em>Oh, that's great.</em></p>
     </div>
     </div>

     




    
    
     </div>
      
    </div>



    
  )
}
