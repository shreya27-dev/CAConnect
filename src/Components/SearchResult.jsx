import React from 'react'
import SearchResultList from './SearchResultList';


const SearchResult = ({results}) => {
  return (
    <div className="w-[500px] bg-white flex flex-col shadow-2xl ml-[90px] mt-2 max-h-80 overflow-y-scroll rounded ">
      {
        results.map((result,id) => {
            return <SearchResultList result={result.name} key={id}/>
        })
      }
    
      
    </div>
      
      );
};

export default SearchResult;
