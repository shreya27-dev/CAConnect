import React, {useState} from 'react'
import {useNavigate } from 'react-router-dom';




export default function Search({setResults}) {

    
    const navigate = useNavigate();
    const [input, setInput] = useState(" ");
    const fetchData = (value) => 
    
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                return (value &&
                 user && 
                 user.name && 
                 user.name.toLowerCase().includes(value)
                );
            });

            setResults(results)

            
        });
}

const handleChange = (value) => {
    setInput(value);
    fetchData(value);
}

return (
    <div>

<div className='flex ml-[90px] mt-[-150px]'>   
    <input className='bg-gray-50 border border-slate-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-blue-500 block mt-10 w-[500px] pl-10 p-2.5' 
    type="text" id="voice-search" placeholder="Search by full name" value={input} onChange={(e) => handleChange(e.target.value)}
    required />
    
    <button onClick={() => {navigate("/CA Professionals")}}  
    className='mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2' type="submit">Search</button>

</div>
      
    </div>
  )
}
