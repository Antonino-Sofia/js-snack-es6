console.log("Snack 1");

/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

const bikes = [
  {
    nome: "Bike 1",
    peso: 7, //peso inferiore: 7
  },
  {
    nome: "Bike wow",
    peso: 5, //peso inferiore 5
  },
  {
    nome: "Bike 2",
    peso: 14, //peso inferiore: 7
  },
  {
    nome: "Bike 4",
    peso: 20, //peso inferiore 5
  },
  {
    nome: "Bike 5",
    peso: 5, //peso inferiore: 7
  },
];

// SOLUZIONE

let minWeight = bikes[0]["peso"];
let minBike = bikes[0];

for (let i = 1; i < bikes.length; i++) {
  constBike = bikes[i];

  if (minWeight >= currentBike.peso) {
    minWeight = currentBike.peso;
    minBike = currentBike;
  }
}

console.log(minWeight);
console.log(minBike);
