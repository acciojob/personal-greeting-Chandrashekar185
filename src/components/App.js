import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState('');

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
        
      {name && <h3>Hello {name}!</h3>}
    </div>
  );
};

export default App;
