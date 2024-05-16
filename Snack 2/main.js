"use strict"

//Creare un array di oggetti di squadre di calcio. 
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre verranno create in seguito in un'altro array.

const nomiSquadre = ['Juventus', 'Milan', 'Inter', 'Atalanta', 'Roma', 'Napoli'];

const squadre = nomiSquadre.map(nome => {
    return {
        nome: nome,
        puntiFatti: getRndInt(100, 70),
        falliSubiti: getRndInt(300, 250)
    };
});

const nomiEFalli = squadre.map(squadra => {
    return {
        nome: squadra.nome,
        falliSubiti: squadra.falliSubiti
    };
});

console.log("Array di oggetti delle squadre:", squadre);
console.log("Array con nomi e falli subiti:", nomiEFalli);

//funzione di utility per i numeri random
function getRndInt(max, min){
    return  Math.floor(Math.random() * (max - min + 1) + min);
}