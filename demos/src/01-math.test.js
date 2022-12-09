const { sum, multiply, divide } = require('./01-math');

test('should be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('should be  30', () => {
  expect(multiply(10, 3)).toBe(30);
});

test('should be  2', () => {
  expect(divide(4, 2)).toBe(2);
});
