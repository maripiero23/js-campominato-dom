const btnGriglia = document.getElementById("btn-griglia");
const selectLevel = document.querySelector("[name='select-level']")


btnGriglia.addEventListener("click", function(){

    // vado a recuprare il livello selezionato nella select

    const level = selectLevel.value;

    console.log(+level);

 






    //uso il valore dell'input come argomento della funzione
    generaGriglia(+level);


})






/**
 * @param {number} numCelle numero di celle
 * @param {*} numCelle 
 */
function generaGriglia(numCelle){

    const gridContainer = document.querySelector(".grid-container");

    //resetto il contenuto della griglia prima di aggiungere quello nuovo
    gridContainer.innerHTML = "";

    // const sommaCelle = numCelle * numCelle; /*con questo num creo un ciclo for*/



    //creo ora l'html attraverso un ciclo nel contenitore

    for(let i = 1; i<numCelle; i++){

        //non uso l'inneHTML ma il create element
        //creo un elemento html di tipo div:

        const nuovaCella = document.createElement("div");

        // recupero il numero di righe che verranno create
        const rowsNum = Math.sqrt( numCelle );

        //aggiungo ora classi e stile a questo tag

        nuovaCella.classList.add("new-cell");
        nuovaCella.style.flexBasis = 100 / rowsNum + "%";

        nuovaCella.innerHTML = i;

        //ora ad ogni cella appena creata vado ad aggiungere un evento sul click

        nuovaCella.addEventListener("click",function(){
            //ora voglio cambiare il colore della cella quando clicco sopra la cella
            this.classList.toggle("bg-primary");

            console.log("la cella cliccata è la numero", i);
        })

        gridContainer.append(nuovaCella);




    }
}







