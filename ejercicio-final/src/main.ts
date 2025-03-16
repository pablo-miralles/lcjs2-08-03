import "./style.css";
import { tablero } from "./modelo";
import {
	establecerMensaje,
	obtenerIdCarta,
	generarDivsTablero,
	mostrarImagenCarta,
	ocultarCartasErroneas,
	updateNumeroIntentos,
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
		iniciaPartida(tablero);
		if (mainDiv && mainDiv instanceof HTMLDivElement) {
			generarDivsTablero(tablero.cartas, mainDiv);
		}
		updateNumeroIntentos();
	});
}

const bloquearTableroMomentaneamente = () => {
	if (mainDiv && mainDiv instanceof HTMLDivElement) {
		mainDiv.setAttribute("style", "pointer-events:none");
		setTimeout(() => {
			prepararTableroParaSiguienteJugada(tablero);
			mainDiv.removeAttribute("style");
		}, 1000);
	}
};

document.addEventListener("click", (e) => {
	const elemento = (e.target as HTMLElement).closest(".cards__item");

	if (!elemento || !(elemento instanceof HTMLDivElement)) return;

	let idCarta = obtenerIdCarta(elemento);
	const sePuedeVoltear = sePuedeVoltearLaCarta(tablero, idCarta);

	if (!sePuedeVoltear) {
		establecerMensaje("No puedes pulsar esta carta de nuevo");
		return;
	}

	voltearLaCarta(tablero, idCarta);
	mostrarImagenCarta(elemento, idCarta);
	establecerCartaAOB(tablero, idCarta);

	const tableroCartaA = tablero.indiceCartaVolteadaA;
	const tableroCartaB = tablero.indiceCartaVolteadaB;
	if (
		tablero.estadoPartida === "DosCartasLevantadas" &&
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
			parejaNoEncontrada(tablero, tableroCartaA, tableroCartaB);
			if (mainDiv && mainDiv instanceof HTMLDivElement) {
				setTimeout(() => {
					ocultarCartasErroneas(mainDiv);
				}, 1000);
			}
		}
		bloquearTableroMomentaneamente();
		tablero.numeroIntentos += 1;
		updateNumeroIntentos();
	}
});
