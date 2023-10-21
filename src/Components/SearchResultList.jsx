import React from 'react'

const SearchResultList = ({result}) => {
  return <div className='p-[20px] hover:bg-slate-200 cursor-grab' 
  onClick ={(e) => alert(`You clicked on ${result}`) } 
  >
  {result}
  </div>

  
}

export default SearchResultList
