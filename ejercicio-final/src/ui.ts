import { tablero, Carta } from "./modelo";

const mensaje = document.querySelector(".mensaje");

export const establecerMensaje = (texto: string): void => {
	if (mensaje && mensaje instanceof HTMLDivElement) {
		mensaje.innerHTML = texto;
		setTimeout(() => {
			mensaje.innerHTML = "";
		}, 2000);
	}
};

export const obtenerIdCarta = (elemento: HTMLDivElement) => {
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
	}
};

export const mostrarImagenCarta = (
	elemento: HTMLDivElement,
	idCarta: number
): void => {
	const img = elemento.querySelector("img");
	if (img && img instanceof HTMLImageElement) {
		img.src = tablero.cartas[idCarta].imagen;
		elemento.classList.add("is-selected");
	}
};

export const ocultarCartasErroneas = (div: HTMLDivElement): void => {
	const elementos = div.childNodes;
	elementos.forEach((elemento, index) => {
		if (elemento instanceof HTMLDivElement) {
			if (
				index === tablero.indiceCartaVolteadaA ||
				index === tablero.indiceCartaVolteadaB
			) {
				const img = elemento.querySelector("img");
				if (img && img instanceof HTMLImageElement) {
					img.src = "";
					elemento.classList.remove("is-selected");
				}
			}
		}
	});
};
