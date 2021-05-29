import React from 'react'
import Cats from './Cats/Cats.js'


function App() {
  return (
    <div className="App">
       <Cats
       imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
       name="Carmen"
       text="England cat"
       />
       <Cats 
       imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Larry_Chief_Mouser_%28cropped%29.jpg/220px-Larry_Chief_Mouser_%28cropped%29.jpg" 
       name="Kate"
       text="American cat"
       />
       <Cats
       imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg"
      name="Siload"
      text="Persian cat"
      />
       <Cats 
       imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg" 
       name="Ragdoll"
       text="Russian cat"
       />
    </div>
  );
}

export default App;
