import './App.scss';
import React, { useState } from 'react';

function App() {

  const [isJumping, setIsJumping] = useState(false)

  function handleJump(){
    setIsJumping(true)
    setTimeout(() => {
      setIsJumping(false)
    }, 500);
   }

   console.log(isJumping)
  return (
    <section className="game">
      <div className={`game__character game__character${isJumping ? '--animate' : ''}`} onClick={handleJump}></div>
      <div className='game__obstacle'></div>
    </section>
  );
}



export default App;
