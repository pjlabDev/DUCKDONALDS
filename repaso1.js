

function anadir() {
	let tabla = document.getElementById('tabla');
	let posicion = document.getElementById('posicion').value;
	let equipo = document.getElementById('equipo').value;
	let puntos = document.getElementById('puntos').value;
	

	
	let numeroEquipos = tabla.rows.length -1;

	if(posicion > numeroEquipos) {
		let equipoAnadido = document.getElementById("tabla").insertRow();
		let datoPosicion = equipoAnadido.insertCell(0);
		let datoEquipo = equipoAnadido.insertCell(1);
		let datoPuntos = equipoAnadido.insertCell(2);

		datoPosicion.innerHTML = posicion;
		datoEquipo.innerHTML = equipo;
		datoPuntos.innerHTML = puntos;
	}else if (posicion <= numeroEquipos) {
		
		tabla.deleteRow(posicion);
		let equipoAnadido = document.getElementById("tabla").insertRow();
		let datoPosicion = equipoAnadido.insertCell(0);
		let datoEquipo = equipoAnadido.insertCell(1);
		let datoPuntos = equipoAnadido.insertCell(2);

		datoPosicion.innerHTML = posicion;
		datoEquipo.innerHTML = equipo;
		datoPuntos.innerHTML = puntos;
	}

	console.log(numeroEquipos);
}

console.log(posicion);
console.log(equipo);
console.log(puntos);