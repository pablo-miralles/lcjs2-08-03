import "./style.css";
import { tablero } from "./modelo";
import {
	establecerMensaje,
	obtenerIdCarta,
	generarDivsTablero,
	mostrarImagenCarta,
	ocultarCartasErroneas,
} from "./ui";
import {
	iniciaPartida,
	sePuedeVoltearLaCarta,
	voltearLaCarta,
	sonPareja,
	parejaEncontrada,
	parejaNoEncontrada,
	establecerCartaAOB,
	prepararTableroParaSiguienteJugada,
} from "./motor";

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
	console.log(tablero);
	const elemento = e.target;
	if (
		elemento &&
		elemento instanceof HTMLDivElement &&
		elemento.classList.contains("cards__item")
	) {
		let idCarta = obtenerIdCarta(elemento);
		const sePuedeVoltear = sePuedeVoltearLaCarta(tablero, idCarta);
		if (sePuedeVoltear) {
			voltearLaCarta(tablero, idCarta);
			mostrarImagenCarta(elemento, idCarta);
			tablero.cartas[idCarta].estaVuelta = true;
			establecerCartaAOB(tablero, idCarta);

			if (tablero.estadoPartida === "DosCartasLevantadas") {
				const indiceA = tablero.indiceCartaVolteadaA;
				const indiceB = tablero.indiceCartaVolteadaB;

				if (
					indiceA !== undefined &&
					indiceA !== null &&
					indiceB !== undefined &&
					indiceB !== null
				) {
					const sonLasCartasPareja = sonPareja(
						tablero,
						indiceA,
						indiceB
					);
					if (sonLasCartasPareja) {
						parejaEncontrada(tablero, indiceA, indiceB);
					} else {
						parejaNoEncontrada(tablero, indiceA, indiceB);
						if (mainDiv && mainDiv instanceof HTMLDivElement) {
							mainDiv.setAttribute(
								"style",
								"pointer-events:none"
							);
							setTimeout(() => {
								ocultarCartasErroneas(mainDiv);
								mainDiv.removeAttribute("style");
								prepararTableroParaSiguienteJugada(tablero);
							}, 1000);
						}
					}
					setTimeout(() => {
						prepararTableroParaSiguienteJugada(tablero);
					}, 1000);
				}
			}
		} else {
			establecerMensaje("No puedes voltear esa carta");
			alert("No puedes voltear esa carta");
		}
	}
});
