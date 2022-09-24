import calculate from '../../components/logic/calculate';

it('Test Calculate JS', () => {
  // Arrange
  const object = { sum: 0, next: null, val: null };

  // ACT
  let result = calculate(object, '23');
  result = calculate(result, '+');
  result = calculate(result, '7');
  result = calculate(result, '=');

  // Assert
  expect(+result.sum).toBe(30);
});
