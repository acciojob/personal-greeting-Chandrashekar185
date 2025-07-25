import React, { useState } from "react";

function GreetingComponent() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      {name.trim() !== "" && <h2>Hello, {name}!</h2>}
    </div>
  );
}

export default GreetingComponent;
