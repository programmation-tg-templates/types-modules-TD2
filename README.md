# Types et modules - TD2 - Calculs géométriques

## Consignes

L’objectif est de concevoir un programme capable de réaliser des calculs géométriques de base, tels que le calcul du périmètre et de l’aire pour deux figures simples : le carré et le cercle.

Le programme sera organisé en **plusieurs fichiers** (modules) :

```
📁 src/
├── 📄 carre.ts
├── 📄 cercle.ts
└── 📄 main.ts
```

Le fichier `carre.ts` contient deux fonctions :

1. `perimetreCarre(longueurCote: number): number` pour le calcul du périmètre ;
2. `aireCarre(longueurCote: number): number` pour le calcul de l’aire.

Le fichier `cercle.ts` contient deux fonctions :

1. `perimetreCercle(rayon: number): number` pour le calcul du périmètre ;
2. `aireCercle(rayon: number): number` pour le calcul de l’aire.

Le fichier `main.ts` importe et utilise les fonctions définies dans les deux modules précédents.

