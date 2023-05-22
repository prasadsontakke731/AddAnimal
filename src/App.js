import AnimalShow from './AnimalShow';
import React, { useState } from 'react';
import './index.css';
import './App.css';
function App() {
  const [animals, setAnimals] = useState([]);
  // random Animal
  function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'gator', 'horse', 'dog'];

    return animals[Math.floor(Math.random() * animals.length)];
  }

  // click function
  const handle = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  // using map function
  const rendereAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div className='App'>
      <button onClick={handle}>Add Animal</button>
      <div className='animal-list'>{rendereAnimals}</div>
    </div>
  );
}

export default App;
