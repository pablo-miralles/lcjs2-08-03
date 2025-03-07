export interface Partida {
	tarjetas: TiposDeTarjetas[];
	cantidadDeTarjetasVolteadas: number;
}

type TiposDeTarjetas =
	| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png"
	| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png"
	| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png"
	| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png"
	| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png"
	| "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png";

const listadoInicialDeTarjetas: TiposDeTarjetas[] = [
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/1.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/2.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/3.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/4.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/5.png",
	"https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/refs/heads/main/memo/6.png",
];

export const listadoInicialDeTarjetasDuplicado: TiposDeTarjetas[] = [
	...listadoInicialDeTarjetas,
	...listadoInicialDeTarjetas,
];

export const estadoPartida: Partida = {
	tarjetas: listadoInicialDeTarjetasDuplicado,
	cantidadDeTarjetasVolteadas: 0,
};
