const Person = require('./06-person');

describe('Test for Person', () => {
  let person;
  beforeEach(() => {
    person = new Person('Camilo', 72, 1.75);
  });

  test('Should return down', () => {
    person.weight = 45;
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });

  test('Should return alto', () => {
    person.weight = 96;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 2');
  });
});
