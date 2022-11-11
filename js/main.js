/*
Devo creare 16 bombe. 
Quando l'utente clicca su una cella, devo controllare se quella cella contiene una bomba
Se si, il gioco finisce e l'utente perde,
altrimenti il gioco va avanti
*/



const btnGriglia = document.getElementById("btn-griglia");
const selectLevel = document.querySelector("[name='select-level']")
let bombe;


btnGriglia.addEventListener("click", function(){

    // vado a recuprare il livello selezionato nella select

    const level = selectLevel.value;

    // console.log(+level);


    //salvo dentro la variabile globale "bombe" l'array creato
    //dalla funzione "createBombs"
    bombe = createBombs(+level)

 

    //uso il valore dell'input come argomento della funzione
    generaGriglia(+level);


})






/**
 * @param {number} numCelle numero di celle
 * @param {*} numCelle 
 */
function generaGriglia(numCelle){

    const gridContainer = document.querySelector(".grid-container");

    // svuoto il contenuto del gridContainer per evitare che le celle vecchie rimangano
    gridContainer.innerHTML = "";



    //creo ora l'html attraverso un ciclo nel contenitore
    for(let i = 0; i<numCelle; i++){

        //non uso l'inneHTML ma il create element
        //creo un elemento html di tipo div:

        const nuovaCella = document.createElement("div");

        // recupero il numero di righe che verranno create
        const rowsNum = Math.sqrt( numCelle );

        //aggiungo ora classi e stile a questo tag

        nuovaCella.classList.add("new-cell");
        nuovaCella.style.flexBasis = 100 / rowsNum + "%";

        // nuovaCella.innerHTML = i;

        //per capire il numero associato alla cella cliccata creo un attributo
        //personalizzato all'elem html
        nuovaCella.dataset.nuovaCella = i +1;


        //ora ad ogni cella appena creata vado ad aggiungere un evento sul click
        nuovaCella.addEventListener("click", onCellClick)
            //ora voglio cambiare il colore della cella quando clicco sopra la cella
            // this.classList.toggle("bg-primary");

            // console.log("la cella cliccata è la numero", i);
        

        gridContainer.append(nuovaCella);

    }
}

function onCellClick(){

    //1 devo capire il numero associato alla cella cliccata 
    //per farlo vado a prendere l'attributo che avevo dato all'elem html
    const numCella = +this.dataset.nuovaCella;  

    //2 conrollo se il numero è presente nella "listaBombe",
    //se è presente ho beccato una bomba (condizione)
    if( bombe.includes( numCella )){
        alert("sfigato hai beccato una bomba");

        this.classList.add( "active", "bg-danger" );

    }else{

        this.classList.toggle( "active" );
    }


}


/**
 * Generiamo un numero random compreso tra 2 estremi
 * @param {number} min numero minimo
 * @param {number} max numero massimo
 */
 function createNumberRandom ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
  }



  /**
   * creo una funzione mi generi un array di 16 bombe
   * @param {number} numCelle
   * @return {array}
   * 
   */
  function createBombs(numCelle){
    const listaBombe = [];

    while( listaBombe.length < 16 ){ // = fin quando l'array listaBombe non raggiunge una lunghezza di 16
        //creo un numero random
        const num = createNumberRandom( 1, numCelle)


        //devo far si che i numeri presenti nell'array siano unici
        //faccio un controllo se il numero appena creato non sia già presente nell'array listaBombe, perchè se è gia presente non va pushato
        //Se NON è gia presente lo pusho
        if(!listaBombe.includes(num))

        //aggiungo questo numero random appena creato alla listaBombe
        listaBombe.push(num)

    }
        console.log(listaBombe);
        return listaBombe

  }




