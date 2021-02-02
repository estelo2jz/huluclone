import React, { useState } from 'react';
import Nav from '../Nav';
import Results from '../Results';
import requests from '../../requests';


function Home() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div>
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} /> 
    </div>
  )
}

export default Home
