/* eslint-disable react/prefer-stateless-function */

import React, { useState } from 'react';
import './calc.css';
import calculate from './logic/calculate';
import Header from '../header';

const Calc = () => {
  const [state, setState] = useState({ sum: '0' });

  const object1 = state;

  const handelClick = (state, button) => {
    setState(calculate(state, button));
  };
  return (
    <div className="bordeer">
      <Header />
      <div className="maingrid">
        <button type="button" className="btn1">{ state.next || state.val || state.sum || 0}</button>
        <button type="button" className="btn2" onClick={() => handelClick(object1, 'AC')}>AC</button>
        <button type="button" className="btn3" onClick={() => handelClick(object1, '+/-')}>+/-</button>
        <button type="button" className="btn4" onClick={() => handelClick(object1, '%')}>%</button>
        <button type="button" className="btn5" onClick={() => handelClick(object1, '÷')}>÷</button>
        <button type="button" className="btn6" onClick={() => handelClick(object1, '7')}>7</button>
        <button type="button" className="btn7" onClick={() => handelClick(object1, '8')}>8</button>
        <button type="button" className="btn8" onClick={() => handelClick(object1, '9')}>9</button>
        <button type="button" className="btn9" onClick={() => handelClick(object1, 'x')}>x</button>
        <button type="button" className="btn10" onClick={() => handelClick(object1, '4')}>4</button>
        <button type="button" className="btn11" onClick={() => handelClick(object1, '5')}>5</button>
        <button type="button" className="btn12" onClick={() => handelClick(object1, '6')}>6</button>
        <button type="button" className="btn13" onClick={() => handelClick(object1, '-')}>-</button>
        <button type="button" className="btn14" onClick={() => handelClick(object1, '1')}>1</button>
        <button type="button" className="btn15" onClick={() => handelClick(object1, '2')}>2</button>
        <button type="button" className="btn16" onClick={() => handelClick(object1, '3')}>3</button>
        <button type="button" className="btn17" onClick={() => handelClick(object1, '+')}>+</button>
        <button type="button" className="btn18" onClick={() => handelClick(object1, '0')}>0</button>
        <button type="button" className="btn19" onClick={() => handelClick(object1, '.')}>.</button>
        <button type="button" className="btn20" onClick={() => handelClick(object1, '=')}>=</button>
      </div>
    </div>
  );
};

export default Calc;
