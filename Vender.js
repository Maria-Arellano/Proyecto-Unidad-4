
var nombre = 'Michelle'
if (nombre.length >7) {
    console.log(' ¡Bienvenido! ¿Estás buscando comprar productos de tus peliculas favoritas? Haz llegado al lugar correcto, en esta sección podrás encontrar muchos productos de Marvel y a un bajo costo No te pierdas esta oportunidad!')
    alert(' ¡Bienvenido! ¿Estás buscando comprar productos de tus peliculas favoritas? Haz llegado al lugar correcto, en esta sección podrás encontrar muchos productos de Marvel y a un bajo costo ¡No te pierdas esta oportunidad!');
}

var cajita =[];

var listado = document.getElementById('listado');
var producto = document.getElementById('producto');
var contador = document.getElementById('contador');

if(cajita.length==0){
    listado.innerHTML = "no hay nada aqui...";
}

function agregar(){
    cajita.push(producto.value);
    listado.innerHTML=cajita;
    contador.innerHTML = cajita.length;
}

