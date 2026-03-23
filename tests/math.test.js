const { suma, resta, multiplicacion } = require("../src/math");

test("suma correctamente", () => {
  expect(suma(2, 3)).toBe(5);
});

test("resta correctamente", () => {
  expect(resta(5, 3)).toBe(2);
});

test("multiplica correctamente", () => {
  expect(multiplicacion(2, 4)).toBe(8);
});