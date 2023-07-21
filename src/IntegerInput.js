import React, { useState } from 'react';

const DecimalInput = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    const floatValue = parseFloat(e.target.value);

    if (isNaN(floatValue) || floatValue < 0) {
      setInput("");
    } else {
      setInput(floatValue);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', alignItems: 'center' }}>
      <input 
        type="number" 
        value={input} 
        onChange={handleInputChange} 
        min="0" 
        step="0.01"
      />
      <span style={{ marginLeft: '10px', fontSize: '20px' }}>ETH</span>
    </div>
        
  );
};

export default DecimalInput;
