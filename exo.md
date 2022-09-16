#Générateur de couleurs

Cet exercie va se décourler en 2 phases:

1. Générer les couleurs à partir d'une plage fournie
   `["green", "red", "rgba(133,122,200)", "#f15025"]`

2. Générer les couleurs avec la notation hexadécimale
   `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]`
   En ce qui concerne cette 2ème phase, il faudra noter que les couleurs qui vont être générée auront le format suivant : `#123abc`.
   Quelque soit la couleur générée, on a toujours le prefix `#` et après ce préfixe on a 6 caractères aléatoires pris dans le tableau `hex` ci-dessus.

   Pour générerer un nombre aléatoire, vous devez regarder la documentation de [`Math.random`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

Exemple d'exécution
![Alt Text](https://res.cloudinary.com/jochri3/image/upload/v1658909893/gif%20exercices/tp1-color-generator.gif)
