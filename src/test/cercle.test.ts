// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { perimetreCercle, aireCercle } from "../cercle";

describe("perimetreCercle", () => {
  test("devrait calculer le périmètre pour rayon = 5", () => {
    expect(perimetreCercle(5)).toBeCloseTo(31.41592653589793);
  });

  test("devrait calculer le périmètre pour rayon = 10", () => {
    expect(perimetreCercle(10)).toBeCloseTo(62.83185307179586);
  });

  test("devrait retourner 0 pour rayon = 0", () => {
    expect(perimetreCercle(0)).toBe(0);
  });
});

describe("aireCercle", () => {
  test("devrait calculer l'aire pour rayon = 5", () => {
    expect(aireCercle(5)).toBeCloseTo(78.53981633974483);
  });

  test("devrait calculer l'aire pour rayon = 10", () => {
    expect(aireCercle(10)).toBeCloseTo(314.1592653589793);
  });

  test("devrait retourner 0 pour rayon = 0", () => {
    expect(aireCercle(0)).toBe(0);
  });
});
