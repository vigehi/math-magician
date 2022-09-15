import operate from './operate';

function isNumber(getid) {
  return !!getid.match(/[0-9]+/);
}

export default function calculate(object1, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      val: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && object1.next === '0') {
      return {};
    }
    if (object1.val) {
      if (object1.next) {
        return { ...object1, next: object1.next + buttonName };
      }
      return { ...object1, next: buttonName };
    }
    if (object1.next) {
      return {
        next: object1.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === '.') {
    if (object1.next) {
      if (object1.next.includes('.')) {
        return { ...object1 };
      }
      return { ...object1, next: `${object1.next}.` };
    }
    if (object1.val) {
      return { next: '0.' };
    }
    if (object1.total) {
      if (object1.total.includes('.')) {
        return {};
      }
      return { total: `${object1.total}.` };
    }
    return { total: '0.' };
  }

  if (buttonName === '=') {
    if (object1.next && object1.val) {
      return {
        total: operate(object1.total, object1.next, object1.val),
        next: null,
        val: null,
      };
    }
    return {};
  }

  if (buttonName === '+/-') {
    if (object1.next) {
      return { ...object1, next: (-1 * parseFloat(object1.next)).toString() };
    }
    if (object1.total) {
      return { ...object1, total: (-1 * parseFloat(object1.total)).toString() };
    }
    return {};
  }
  if (!object1.next && object1.total && !object1.val) {
    return { ...object1, val: buttonName };
  }
  if (object1.val) {
    if (object1.total && !object1.next) {
      return { ...object1, val: buttonName };
    }

    return {
      total: operate(object1.total, object1.next, object1.val),
      next: null,
      val: buttonName,
    };
  }
  if (!object1.next) {
    return { val: buttonName };
  }
  return {
    total: object1.next,
    next: null,
    val: buttonName,
  };
}
