import { Carta, tablero } from "./modelo";
import { iniciaPartida, esPartidaCompleta } from "./motor";

const obtenerIdCarta = (elemento: HTMLDivElement) => {
	const result = Number(elemento.getAttribute("data-indice-array"));
	return result;
};

const generarUiTablero = (
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
	console.log(idCarta);
	esPartidaCompleta(tablero);
};

const mainDiv = document.querySelector(".cards");
const btnIniciar = document.querySelector(".btn-iniciar");

if (btnIniciar && btnIniciar instanceof HTMLButtonElement) {
	btnIniciar.addEventListener("click", () => {
		iniciaPartida(tablero);
		if (mainDiv && mainDiv instanceof HTMLDivElement) {
			generarUiTablero(tablero.cartas, mainDiv);
		}
	});
}
