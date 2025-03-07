import "./style.css";

export const mostrarImagenYVoltearCarta = (): void => {
	const tarjetas = document.querySelectorAll(".cards__item");

	if (tarjetas && tarjetas instanceof NodeList) {
		tarjetas.forEach((elemento) => {
			elemento.addEventListener("click", () => {
				const img = elemento.querySelector("img");
				elemento.classList.add("is-selected");

				if (img && img instanceof HTMLImageElement) {
					img.src =
						"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
				}
			});
		});
	}
};

document.addEventListener("DOMContentLoaded", () => {
	mostrarImagenYVoltearCarta();
});
