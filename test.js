const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function concatenar(name, lastname, nickname){
    console.log(`Mi nombre completo es ${name} ${lastname}, pero prefiero que me digas ${nickname}.`)
}



const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}


    if (tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
    }
    if(tipoDeSuscripcion == 'Basic'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    }
    if(tipoDeSuscripcion == 'Expert'){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    }
    if(tipoDeSuscripcion == 'ExpertPlus'){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }




    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
    }
    
    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
    }


    let i = 10;
    while (i >= 2){
        console.log("El valor de i es: " + i);
        i--;
    }


 var respuesta = prompt('Ingrese el resultado de 2 + 2')
    function mensaje(resultado){
        if (resultado == 4){
            console.log("Felicitaciones respuesta correcta")
        } else {console.log("Sigue intentando")}
    }
mensaje(respuesta)

function practica(miArray){
    console.log(miArray[0])
}
let miArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
function practica(miArray){
    for(let i = 0; i<miArray.lenght; i++){
        console.log(miArray[i])
    }
}

let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
  };
function practica(miObjeto){
    for (let key in miObjeto) {
        console.log(miObjeto[key]);
         }
     }
practica(myCar)
