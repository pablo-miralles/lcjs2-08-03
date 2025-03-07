import "../style.css";

const arrayTarjetas = [
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
];

const generarUI = (): void => {
	const mainDiv = document.querySelector(".cards");

	if (mainDiv && mainDiv instanceof HTMLDivElement) {
		for (let i = 0; i < arrayTarjetas.length; i++) {
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

document.addEventListener("DOMContentLoaded", generarUI);
