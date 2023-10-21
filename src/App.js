import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Footer from './Components/Footer';
import Search from './Components/Search';
import SearchResult from './Components/SearchResult';






function App() {

  const [results, setResults] = useState([]);

  return (
  <>
    <NavBar />
    <Hero /> 
    <Search setResults={setResults} />
    <SearchResult results={results}/>
    <Services />
    <AboutUs />
    <Footer />
    
    
  </>
  );

}

export default App;
