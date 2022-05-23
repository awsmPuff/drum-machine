import React, {useEffect, useState} from 'react';
import './App.css';
import sounds from './sounds';

function App() {
 
  const [key, setKey] = useState("");

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      handleClick(e.key.toUpperCase())
    });
  })

  function handleClick(drum) {
    const audio = document.getElementById(drum);
     audio.play();   
     setKey(drum);
  }

  return (
    <div id="drum-machine">
    <h3>PLAY THE DRUM</h3>
    <div id="display">{key}</div>
    <div className='drum-pads'>
        {sounds.map(x => (
          <div 
          key={x.src}
          className='drum-pad' 
          id={x.src} 
          onClick={() => {
          handleClick(x.letter)
        }}>
        {x.letter}
        <audio id = {x.letter} className='clip' src={x.src}></audio>
        </div>)
        )}
    </div>
    </div>
  );
}

export default App;
