import { Carta } from "./modelo";

const mensaje = document.querySelector(".mensaje");

export const establecerMensaje = (texto: string): void => {
	if (mensaje && mensaje instanceof HTMLParagraphElement) {
		mensaje.innerHTML = texto;
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
