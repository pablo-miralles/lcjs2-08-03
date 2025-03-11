import { Carta, tablero } from "./modelo";
import { sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

const mensaje = document.querySelector(".mensaje");

const establecerMensaje = (texto: string): void => {
	if (mensaje && mensaje instanceof HTMLParagraphElement) {
		mensaje.innerHTML = texto;
	}
};

const obtenerIdCarta = (elemento: HTMLDivElement) => {
	const result = Number(elemento.getAttribute("data-indice-array"));
	return result;
};

export const generarDivsTablero = (
	listado: Carta[],
	contenedor: HTMLDivElement
): void => {
	contenedor.innerHTML = "";
	for (let i = 0; i < listado.length; i++) {
		const div = document.createElement("div");
		const img = document.createElement("img");
		div.classList.add("cards__item");
		div.setAttribute("data-indice-array", i.toString());
		img.src = "";
		div.appendChild(img);
		contenedor.appendChild(div);
		div.addEventListener("click", () => {
			accionesClickCarta(div);
		});
	}
};

const accionesClickCarta = (elemento: HTMLDivElement) => {
	let idCarta = obtenerIdCarta(elemento);
	let sePuedeVoltear = sePuedeVoltearLaCarta(tablero, idCarta);
	if (sePuedeVoltear) {
		voltearLaCarta(tablero, idCarta);
		const img = elemento.querySelector("img");
		if (img && img instanceof HTMLImageElement) {
			img.src = tablero.cartas[idCarta].imagen;
			elemento.classList.add("is-selected");
		}
	} else {
		console.log("ups");
		establecerMensaje("No puedes voltear esa carta");
	}
	console.log(tablero.cartas);
};
