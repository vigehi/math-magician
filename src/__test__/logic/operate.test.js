import operate from '../../components/logic/operate';

it('Testing operate.js', () => {
  // Arrange
  const n1 = 20;
  const n2 = 4;

  // Act
  const sum = operate(n1, n2, '+');
  const minus = operate(n1, n2, '-');
  const product = operate(n1, n2, 'x');
  const divide = operate(n1, n2, '÷');
  const rem = operate(n1, n2, '%');

  // Assert
  expect(+sum).toBe(24);
  expect(+minus).toBe(16);
  expect(+product).toBe(80);
  expect(+divide).toBe(5);
  expect(+rem).toBe(0);
});