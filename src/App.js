import React from 'react';

import './App.css';
import hi from "./images-src/hi.png"
function App() {
  let mytitle = 'hello';

  return (
  <div className="style">
    <h1 className="title">{ mytitle } </h1>
   
    <img src="/images/smile.png"  alt="image" />.<br />
    
    <img src={hi}  alt="image" />
  </div>
  ); 

}

export default App;
