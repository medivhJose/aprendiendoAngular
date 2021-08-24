var nombre = "Jose Macias";
var altura = 170;

/*var concatenacion = nombre + "  " + altura;

// document.write(nombre);
// document.write(altura);
// document.write(concatenacion);

var datos = document.getElementById("datos");
// datos.innerHTML = concatenacion;

datos.innerHTML = `

	<h1>Soy la caja de datos</h1>
	<h2>Mi nombre es: ${nombre} </h2>
	<h3>Mido: ${altura}</h3>

`;

if (altura >= 170) {
	datos.innerHTML += '<h1>Eres una persona ALTA</h1>';
}else{
	datos.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}

for(var i = 1995; i <= 2020; i++){
	datos.innerHTML += "<h2>Estamos en el ano: </h2>"+ i;
}*/

function MuestraMiNombre(nombre,altura){
	var misDatos = `
	<h1>Soy la caja de datos</h1>
	<h2>Mi nombre es: ${nombre}</h2>
	<h3>Mido: ${altura} cm</h3>
	`;

	return misDatos;
}

function imprimir(){
	var datos = document.getElementById("datos");
	datos.innerHTML = MuestraMiNombre("Jose macias", 190);
}

imprimir();

var nombres = ['victor', 'Antonio', 'Joaquin'];


document.write('<h1>Listado de nombres</h1>');
// for(i = 0; i < nombres.length; i++){
// 	document.write(nombres[i] + '<br/>');
// }

// nombres.forEach(function(nombre){
// 	document.write(nombre + '<br/>');
// });

nombres.forEach((nombre) => {
	document.write(nombre + '<br/>');
});


var coche = {
	modelo: 'Mercedes Clase A',
	maxima: 500,
	antiguedad: 2020,
	mostrarDatos(){
		console.log(this.modelo, this.maxima, this.antiguedad);
	},
	propiedad1: "valor aleatorio"
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();


var saludar = new Promise((resolve, reject) =>{

	setTimeout(()=>{
		let saludo = "Hola muy buenas chavales!!!";
		saludo = false;

		if (saludo) {
			resolve(saludo);
		}else{
			reject("no hay saludo disponible");
		}

	}, 2000);

});

saludar.then(resultado => {
	alert(resultado);
})
.catch(err => {
	alert(err);
});