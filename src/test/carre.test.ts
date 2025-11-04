// Tests unitaires écrits par l'enseignant. Ne modifiez pas ce fichier.

import { perimetreCarre, aireCarre } from "../carre";

describe("perimetreCarre", () => {
  test("devrait calculer le périmètre pour cote = 5", () => {
    expect(perimetreCarre(5)).toBe(20);
  });

  test("devrait calculer le périmètre pour cote = 10", () => {
    expect(perimetreCarre(10)).toBe(40);
  });

  test("devrait retourner 0 pour cote = 0", () => {
    expect(perimetreCarre(0)).toBe(0);
  });
});

describe("aireCarre", () => {
  test("devrait calculer l'aire pour cote = 5", () => {
    expect(aireCarre(5)).toBe(25);
  });

  test("devrait calculer l'aire pour cote = 10", () => {
    expect(aireCarre(10)).toBe(100);
  });

  test("devrait retourner 0 pour cote = 0", () => {
    expect(aireCarre(0)).toBe(0);
  });
});
