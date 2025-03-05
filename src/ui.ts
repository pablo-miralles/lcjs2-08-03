import { listadoInicialDeTarjetasDuplicado } from "./modelo";

export const generarUI = (): void => {
	const mainDiv = document.querySelector(".cards");

	if (mainDiv && mainDiv instanceof HTMLDivElement) {
		for (let i = 0; i < listadoInicialDeTarjetasDuplicado.length; i++) {
			const div = document.createElement("div");
			const img = document.createElement("img");
			div.classList.add("cards__item");
			div.setAttribute("data-indice-id", i.toString());
			img.src = "";
			div.appendChild(img);
			mainDiv.appendChild(div);
		}
	}
};
