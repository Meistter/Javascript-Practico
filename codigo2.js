const h1 = document.querySelector('h1')
//podemos ver la diferencia entre usar querySelector y getElementById
const input1 = document.querySelector('#inputId')
const form = document.querySelector('#form')
const input2 = document.getElementById('inputId2')
const btn = document.querySelector('#btn')
const p = document.getElementById('resultado')


//esta funcion se usa para escuchar un evento especifico en la etiqueta almacenada en la variable btn, el primer dato representa el evento
// y el segundo dato la funciona  ejecutar SIN parentesis

// btn.addEventListener('click', sumar);

// function sumar(e){
//    const suma = Number(input1.value) + Number(input2.value)
//    p.append(suma)
// } 

//para usar FORM debemos recibir como parametro el evento que da el form, para luego poner el preventDefault() para que no
// se recargue la pagina
form.addEventListener('submit', sumar);
function sumar(event){
    event.preventDefault()
   const suma = Number(input1.value) + Number(input2.value)
   p.append(suma)
   alert("virus")
} 
//Otra forma de resolver esto es definir el ultimo boton del formulario como type=button y listo