import "./style.css";

interface InfoCarta {
	idFoto: number;
	imagen: string;
}

const mainDiv = document.querySelector(".cards");

const arrayInicial: InfoCarta[] = [
	{
		idFoto: 1,
		imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
	},
	{
		idFoto: 2,
		imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
	},
	{
		idFoto: 3,
		imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
	},
	{
		idFoto: 4,
		imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
	},
	{
		idFoto: 5,
		imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
	},
	{
		idFoto: 6,
		imagen: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
	},
];

const arrayTarjetasListoParaUsar: InfoCarta[] = [
	...arrayInicial,
	...arrayInicial,
];

const generarUI = (
	listado: InfoCarta[],
	contenedor: HTMLDivElement,
	classNameDeseado: string
): void => {
	for (let i = 0; i < listado.length; i++) {
		const div = document.createElement("div");
		const img = document.createElement("img");
		div.classList.add(classNameDeseado);
		div.setAttribute("data-indice-id", i.toString());
		img.src = "";
		div.appendChild(img);
		contenedor.appendChild(div);
	}
};

const indentificarTarjetaOnClick = (
	elementos: NodeList,
	listado: InfoCarta[]
): void => {
	elementos.forEach((elemento) => {
		elemento.addEventListener("click", (evento) => {
			const elementoHTML = evento.currentTarget as HTMLElement;
			const elementoId = Number(elementoHTML.dataset.indiceId);
			if (
				elementoId !== null &&
				elementoId !== undefined &&
				!isNaN(elementoId)
			) {
				const img = elementoHTML.querySelector("img");
				if (img && img instanceof HTMLImageElement) {
					img.src = listado[elementoId]["imagen"];
				}
			}
			elementoHTML.classList.add("is-selected");
		});
	});
};

document.addEventListener("DOMContentLoaded", () => {
	if (mainDiv && mainDiv instanceof HTMLDivElement) {
		generarUI(arrayTarjetasListoParaUsar, mainDiv, "cards__item");
	}

	const cards = document.querySelectorAll(".cards__item");
	if (cards && cards instanceof NodeList) {
		indentificarTarjetaOnClick(cards, arrayTarjetasListoParaUsar);
	}
});
