import "./style.css";
import { tablero } from "./modelo";
import { establecerMensaje, obtenerIdCarta, generarDivsTablero } from "./ui";
import { iniciaPartida, sePuedeVoltearLaCarta, voltearLaCarta } from "./motor";

const mainDiv = document.querySelector(".cards");
const btnIniciar = document.querySelector(".btn-iniciar");

if (btnIniciar && btnIniciar instanceof HTMLButtonElement) {
	btnIniciar.addEventListener("click", () => {
		if (mainDiv && mainDiv instanceof HTMLDivElement) {
			iniciaPartida(tablero);
			generarDivsTablero(tablero.cartas, mainDiv);
		}
	});
}

document.addEventListener("click", (e) => {
	const elemento = e.target;
	if (
		elemento &&
		elemento instanceof HTMLDivElement &&
		elemento.classList.contains("cards__item")
	) {
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
	}
});
