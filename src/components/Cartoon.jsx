import React, { useState, useEffect } from "react";
import axios from "axios";
import './Profile.css';
import {Link} from "react-router-dom"; 

function Cartoon() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (

    <React.Fragment>
    <Link to = {'/calculator'}>
        <button className='calciButton'>Go to Calculator</button>
    </Link>
    
    <Link to = {'/'}>
        <button className='ApiButton'>Go to Profile</button>
    </Link>
        

    <div className="api">
      <h1 className="apiHead">Rick n Morty</h1>
      {Data?.map((character) => (
        <div key={character.id} className="char">
          <img src={character.image} alt="" />
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
        </div>
      ))}
    </div>

    </React.Fragment>
  );
}

export default Cartoon;