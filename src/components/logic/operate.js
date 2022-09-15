import Big from 'big.js';

export default function operate(first, second, val) {
  const val1 = Big(first);
  const val2 = Big(second);
  if (val === '+') {
    return val1.plus(val2).toString();
  }
  if (val === '-') {
    return val1.minus(val2).toString();
  }
  if (val === 'x') {
    return val1.times(val2).toString();
  }
  if (val === '÷') {
    try {
      return val1.div(val2).toString();
    } catch (err) {
      return "Not allowed";
    }
  }
  if (val === '%') {
    try {
      return val1.mod(val2).toString();
    } catch (err) {
      return "not allowed";
    }
  }
  throw Error(`not allowed '${val}'`);
}
