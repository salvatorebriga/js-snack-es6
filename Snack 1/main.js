"use strict"

//Dichiarazione dell'array di oggetti contenenti le biciclette
const bici = [
    {
        nome: 'Bici 1',
        peso: 18
    },
    {
        nome: 'Bici 2',
        peso: 8
    },
    {
        nome: 'Bici 3',
        peso: 13
    },
    {
        nome: 'Bici 4',
        peso: 7
    },
    {
        nome: 'Bici 5',
        peso: 24
    },
    {
        nome: 'Bici 6',
        peso: 15
    }
];

//dicchiarazione della variabile 'più leggera' che come 
//valore ha il risultato della funzione compare()

const lighter = compare(bici);

//log del risultato
console.log(lighter);

function compare(object){
    //variabili di appoggio
    let light = object[0].peso;
    let bikeName = object[0].nome;

    for(let i = 0; i < object.length; i++){
        //if auto esplicativo credo
        if(object[i].peso < light){
            //cambio della 'guardia'
            light = object[i].peso;
            bikeName = object[i].nome;
        }
    }

    //grazie all'interpolazione in return ho direttamente 
    //la stringa già pronta per il console log
    return `${bikeName}: ${light} kg`;
}