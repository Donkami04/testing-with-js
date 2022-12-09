// matchers
const data = { name: 'cami' };
data.lastname = 'munera';

test('test obj', () => {
  expect(data).toEqual({ name: 'cami', lastname: 'munera' });
});
