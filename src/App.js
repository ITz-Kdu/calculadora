import React, { useState } from 'react';
import './App.css'; // ou o arquivo de CSS que você preferir

function Calculadora() {
  const [input, setInput] = useState('');

  // Função para atualizar o visor (input)
  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Função para calcular a expressão
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());  // A função `eval` irá calcular a expressão
    } catch (error) {
      setInput('Erro');  // Caso ocorra um erro na operação
    }
  };

  // Função para limpar o visor
  const handleClear = () => {
    setInput('');
  };

  // Função para excluir o último caractere
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <div className="calculadora-container">
      <div className="visor">
        <input type="text" value={input} disabled />
      </div>
      <div className="teclado">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('/')}>/</button>
        
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
        
        <button onClick={handleBackspace}>←</button>
        <button onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default Calculadora;
