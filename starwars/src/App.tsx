import './App.css'
import { Link } from "react-router-dom";
import React, { useState } from "react";




function App() {


  


  return (
    <div>        
        <div className='main'>
            <p className='header'>Star Wars DB</p>

            <div style={{display:'flex', gap:"20px"}}>
              <Link to="/films">Films</Link>
              <Link to="/people">People</Link> 
              <Link to="/planets">Planets</Link> 
              <Link to="/species">Species</Link> 
              <Link to="/starships">Starships</Link> 
              <Link to="/vehicles">Vehicles</Link> 
            </div>

        </div>
        
        

    </div>
    
  )
}

export default App
