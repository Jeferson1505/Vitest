import { test, expect } from "vitest";
import { sumar } from "./Prueba.js";

test("Suma de 2 + 3 es 5", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Suma de números negativos", () => {
  expect(sumar(-1, -1)).toBe(-2);
});
