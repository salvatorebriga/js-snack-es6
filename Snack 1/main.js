"use strict"

//Dichiarazione dell'array di oggetti contenenti le biciclette
const bici = [
    {
        nome: 'Bici 1',
        peso: 18
    },
    {
        nome: 'Bici 2',
        peso: 20
    },
    {
        nome: 'Bici 3',
        peso: 13
    },
    {
        nome: 'Bici 4',
        peso: 20
    },
    {
        nome: 'Bici 5',
        peso: 24
    },
    {
        nome: 'Bici 6',
        peso: 10
    }
];

//dicchiarazione della variabile 'più pesante' che come 
//valore ha il risultato della funzione compare()

const heavier = compare(bici);

//log del risultato
console.log(heavier);

function compare(object){
    //variabili di appoggio
    let heavier = 0;
    let bikeName = '';

    for(let i = 0; i < object.length; i++){
        //if auto esplicativo credo
        if(object[i].peso > heavier){
            //cambio della 'guardia'
            heavier = object[i].peso;
            bikeName = object[i].nome;
        }
    }

    //grazie all'interpolazione in return ho direttamente 
    //la stringa già pronta per il console log
    return `${bikeName}: ${heavier} kg`;
}