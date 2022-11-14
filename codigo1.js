// Esto nos permite ingresar en una variable la etiqueta Html, sea por nombre de etiqueta, por ID, por clase etc.
const p = document.querySelector('p')
const input = document.querySelector('input')
//el inner nos permite cambiar el texto html desde el JS, el innterhtml permite codigo HTML, el innerText solo permite
p.innerHTML = "No se que hace esto"
p.innerText = "Yo si"

//Esto nos sirve para obtener los atributos de la etiqueta HTML, sea inventados o oficiales
console.log(p.getAttribute('pizzeria'))

//Esto sirve para cambiar el valor de los atributos
p.setAttribute('pizzeria', 'Pizza Hot')

//sirve para añadir o remover clases
p.classList.add('ingrediente','ingre')
p.classList.remove('ingre')

//sirve para poner o quitar la clase dependiendo de si ya la tiene o no
p.classList.toggle('ingrediente')
//devuelve true o false dependiendo si el elemento tiene o no la clase
p.classList.toggle('ingrediente')

//cambia el valor del elemento desde js (etiqueta input en este caso)
input.value = "que hace"

//esto -document.createElement('img') crea una imagen en el html
console.log(document.createElement('img'))

const img = document.createElement('img')
//Aqui le definimos los atributos, clases, valores a la etiqueta que estamos creando
img.setAttribute('src', 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20Como%20disciplinar%20a%20tu%20gato.jpg?itok=V7Gs6wt3')
console.log(img)

//Con el append insertamos dentro de una etiqueta la imagen ya creada y almacenada de una variable
//al usar append no se borra el contenido anterior del parrafo si no que inserta la imagen como extra 
p.innerHTML = ""
p.append(img)
p.appendChild(img)