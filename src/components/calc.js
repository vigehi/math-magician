/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calc.css';
import calculate from './logic/calculate';
import Header from '../header';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: '0',
    };
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick = (state, buttonName) => {
    const newState = calculate(state, buttonName);
    this.setState(newState);
  }

  render() {
    const object1 = this.state;
    const { sum, next, val } = this.state;
    return (
      <div className="bordeer">
        <Header />
        <div className="maingrid">
          <button type="button" className="btn1">{ next || val || sum || 0}</button>
          <button type="button" className="btn2" onClick={() => this.handelClick(object1, 'AC')}>AC</button>
          <button type="button" className="btn3" onClick={() => this.handelClick(object1, '+/-')}>+/-</button>
          <button type="button" className="btn4" onClick={() => this.handelClick(object1, '%')}>%</button>
          <button type="button" className="btn5" onClick={() => this.handelClick(object1, '÷')}>÷</button>
          <button type="button" className="btn6" onClick={() => this.handelClick(object1, '7')}>7</button>
          <button type="button" className="btn7" onClick={() => this.handelClick(object1, '8')}>8</button>
          <button type="button" className="btn8" onClick={() => this.handelClick(object1, '9')}>9</button>
          <button type="button" className="btn9" onClick={() => this.handelClick(object1, 'x')}>x</button>
          <button type="button" className="btn10" onClick={() => this.handelClick(object1, '4')}>4</button>
          <button type="button" className="btn11" onClick={() => this.handelClick(object1, '5')}>5</button>
          <button type="button" className="btn12" onClick={() => this.handelClick(object1, '6')}>6</button>
          <button type="button" className="btn13" onClick={() => this.handelClick(object1, '-')}>-</button>
          <button type="button" className="btn14" onClick={() => this.handelClick(object1, '1')}>1</button>
          <button type="button" className="btn15" onClick={() => this.handelClick(object1, '2')}>2</button>
          <button type="button" className="btn16" onClick={() => this.handelClick(object1, '3')}>3</button>
          <button type="button" className="btn17" onClick={() => this.handelClick(object1, '+')}>+</button>
          <button type="button" className="btn18" onClick={() => this.handelClick(object1, '0')}>0</button>
          <button type="button" className="btn19" onClick={() => this.handelClick(object1, '.')}>.</button>
          <button type="button" className="btn20" onClick={() => this.handelClick(object1, '=')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calc;
