/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './calc.css';
import calculate from './logic/calculate';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
    };
    this.handelClick = this.handelClick.bind(this);
  }

  handelClick = (state, button) => {
    const newState = calculate(state, button);
    this.setState(newState);
  }

  render() {
    const object1 = this.state;
    const { total, next, val } = this.state;
    return (
      <div className="bordeer">
        <div className="maingrid">
          <button type="button" className="btn1">{ next || val || total || 0}</button>
          <button type="button" className="btn2" value="2" onClick={() => this.handelClick(object1, 'AC')}>AC</button>
          <button type="button" className="btn3" value="2" onClick={() => this.handelClick(object1, 'AC')}>+/-</button>
          <button type="button" className="btn4" value="2" onClick={() => this.handelClick(object1, 'AC')}>%</button>
          <button type="button" className="btn5" value="2" onClick={() => this.handelClick(object1, 'AC')}>÷</button>
          <button type="button" className="btn6" value="2" onClick={() => this.handelClick(object1, 'AC')}>7</button>
          <button type="button" className="btn7" value="2" onClick={() => this.handelClick(object1, 'AC')}>8</button>
          <button type="button" className="btn8" value="2" onClick={() => this.handelClick(object1, 'AC')}>9</button>
          <button type="button" className="btn9" value="2" onClick={() => this.handelClick(object1, 'AC')}>x</button>
          <button type="button" className="btn10" value="2" onClick={() => this.handelClick(object1, 'AC')}>4</button>
          <button type="button" className="btn11" value="2" onClick={() => this.handelClick(object1, 'AC')}>5</button>
          <button type="button" className="btn12" value="2" onClick={() => this.handelClick(object1, 'AC')}>6</button>
          <button type="button" className="btn13" value="2" onClick={() => this.handelClick(object1, 'AC')}>-</button>
          <button type="button" className="btn14" value="2" onClick={() => this.handelClick(object1, 'AC')}>1</button>
          <button type="button" className="btn15" value="2" onClick={() => this.handelClick(object1, 'AC')}>2</button>
          <button type="button" className="btn16" value="2" onClick={() => this.handelClick(object1, 'AC')}>3</button>
          <button type="button" className="btn17" value="2" onClick={() => this.handelClick(object1, 'AC')}>+</button>
          <button type="button" className="btn18" value="2" onClick={() => this.handelClick(object1, 'AC')}>0</button>
          <button type="button" className="btn19" value="2" onClick={() => this.handelClick(object1, 'AC')}>.</button>
          <button type="button" className="btn20" value="2" onClick={() => this.handelClick(object1, 'AC')}>=</button>
        </div>
      </div>
    );
  }
}

export default Calc;
