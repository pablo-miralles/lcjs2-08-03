export const mostrarImagenYVoltearCarta = (): void => {
	const tarjetas = document.querySelectorAll(".cards__item");

	if (tarjetas && tarjetas instanceof NodeList) {
		tarjetas.forEach((tarjeta) => {
			tarjeta.addEventListener("click", () => {
				const img = tarjeta.querySelector("img");
				tarjeta.classList.add("is-selected");

				if (img && img instanceof HTMLImageElement) {
					img.src =
						"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
				}
			});
		});
	}
};
