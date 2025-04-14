console.log("Snack 2");
/*
Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.




Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
*/

const teams = [
  {
    nome: "Team 1",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Team 2",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Team 3",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Team 4",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Team 5",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

//Genero numeri randomici per punti fatti e per falli subiti

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];

  currentTeam.puntiFatti = Math.floor(Math.random() * 100) + 1;
  currentTeam.falliSubiti = Math.floor(Math.random() * 50) + 1;
}

//ARRAY

const result = [];

for (let i = 0; i < teams.length; i++) {
  const currentTeam = teams[i];

  const { nome, falliSubiti } = currentTeam;
}

constNewTeam = {
  nome: currentTeam.nome,
  falliSubiti: currentTeam.falliSubiti,
};

result.push(newTeam);

console.log(result);
