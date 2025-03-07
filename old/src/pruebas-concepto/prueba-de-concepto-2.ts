import "../style.css";

const tarjeta = document.querySelector(".cards__item");

if (tarjeta && tarjeta instanceof HTMLDivElement) {
	tarjeta.addEventListener("click", () => {
		const img = tarjeta.querySelector("img");
		tarjeta.classList.add("is-selected");

		if (img && img instanceof HTMLImageElement) {
			img.src =
				"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png";
		}
	});
}
