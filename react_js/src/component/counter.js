


import React, { useState } from 'react';

function Increment() {
  
    const [number , setNumber] = useState(0);

    function increment (){
        setNumber ( number + 1)
    }

    function decrement (){
        setNumber ( number - 1)
    }

  return (
  
    
    <div >

<h1>COUNTER : {number}</h1>

<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>


</div>

  );
}

export default Increment;

