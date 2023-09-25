import React, { useState } from 'react';

function Calculator() {
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operation, setOperation] = useState('add'); 
  const [result, setResult] = useState(null);


  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operation) {
      case 'add':
        setResult(num1 + num2);
        break;
      case 'subtract':
        setResult(num1 - num2);
        break;
      case 'multiply':
        setResult(num1 * num2);
        break;
      case 'divide':
        if (num2 === 0) {
          setResult('Division by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Invalid operation');
        break;
    }
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <label>
          Number 1:
          <input type="number" value={input1} onChange={handleInput1Change} />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input type="number" value={input2} onChange={handleInput2Change} />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select value={operation} onChange={handleOperationChange}>
            <option value="add">Addition (+)</option>
            <option value="subtract">Subtraction (-)</option>
            <option value="multiply">Multiplication (*)</option>
            <option value="divide">Division (/)</option>
          </select>
        </label>
      </div>
      <div>
        <button onClick={calculateResult}>Calculate</button>
      </div>
      {result !== null && (
        <div>
          <p>Result:</p>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default Calculator;
