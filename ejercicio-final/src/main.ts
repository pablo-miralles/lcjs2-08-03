import "./style.css";
import { tablero } from "./modelo";
import { generarDivsTablero } from "./ui";
import { iniciaPartida } from "./motor";

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
