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
	sePuedeVoltearLaCarta,
	voltearLaCarta,
	sonPareja,
	parejaEncontrada,
	parejaNoEncontrada,
	iniciaPartida,
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
	console.log("=============================");
	console.log("ANTES DE HACER CLICK");
	console.log("=============================");
	console.log({
		Cartas: tablero.cartas,
		EstadoPartida: tablero.estadoPartida,
		"Carta A": tablero.indiceCartaVolteadaA,
		"Carta B": tablero.indiceCartaVolteadaB,
	});
	const elemento = (e.target as HTMLElement).closest(".cards__item");
	if (elemento && elemento instanceof HTMLDivElement) {
		let idCarta = obtenerIdCarta(elemento);
		const sePuedeVoltear = sePuedeVoltearLaCarta(tablero, idCarta);
		console.log("sepuedevoltear", sePuedeVoltear);
		if (sePuedeVoltear) {
			voltearLaCarta(tablero, idCarta);
			mostrarImagenCarta(elemento, idCarta);
			establecerCartaAOB(tablero, idCarta);
			const tableroCartaA = tablero.indiceCartaVolteadaA;
			const tableroCartaB = tablero.indiceCartaVolteadaB;
			if (tablero.estadoPartida === "DosCartasLevantadas") {
				if (
					tableroCartaA !== undefined &&
					tableroCartaB !== undefined
				) {
					const sonLasCartasPareja = sonPareja(
						tablero,
						tableroCartaA,
						tableroCartaB
					);
					if (sonLasCartasPareja) {
						parejaEncontrada(tablero, tableroCartaA, tableroCartaB);
					} else {
						parejaNoEncontrada(
							tablero,
							tableroCartaA,
							tableroCartaB
						);
						if (mainDiv && mainDiv instanceof HTMLDivElement) {
							setTimeout(() => {
								ocultarCartasErroneas(mainDiv);
							}, 1000);
						}
					}
					if (mainDiv && mainDiv instanceof HTMLDivElement) {
						mainDiv.setAttribute("style", "pointer-events:none");
						setTimeout(() => {
							prepararTableroParaSiguienteJugada(tablero);
							mainDiv.removeAttribute("style");
							console.log("=============================");
							console.log("TRAS UN SEGUNDO");
							console.log("=============================");
							console.log({
								Cartas: tablero.cartas,
								EstadoPartida: tablero.estadoPartida,
								"Carta A": tablero.indiceCartaVolteadaA,
								"Carta B": tablero.indiceCartaVolteadaB,
							});
						}, 1000);
					}
				}
			}
		} else {
			establecerMensaje("No puedes pulsar esta carta de nuevo");
		}
	}
	console.log("=============================");
	console.log("DESPUES DE HACER CLICK");
	console.log("=============================");
	console.log({
		Cartas: tablero.cartas,
		EstadoPartida: tablero.estadoPartida,
		"Carta A": tablero.indiceCartaVolteadaA,
		"Carta B": tablero.indiceCartaVolteadaB,
	});
});
