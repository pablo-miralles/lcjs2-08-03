export interface Carta {
	idFoto: number;
	imagen: string;
	estaVuelta: boolean;
	encontrada: boolean;
}

interface InfoCarta {
	idFoto: number;
	imagen: string;
}

const infoCartas: InfoCarta[] = [
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

const crearCartaInicial = (idFoto: number, imagen: string): Carta => ({
	idFoto,
	imagen,
	estaVuelta: false,
	encontrada: false,
});

const crearColeccionDeCartasInicial = (infoCartas: InfoCarta[]): Carta[] => {
	let nuevoArrayCartas = [...infoCartas, ...infoCartas];
	return nuevoArrayCartas.map((carta) =>
		crearCartaInicial(carta.idFoto, carta.imagen)
	);
};

export let cartas: Carta[] = crearColeccionDeCartasInicial(infoCartas);

type EstadoPartida =
	| "PartidaNoIniciada"
	| "CeroCartasLevantadas"
	| "UnaCartaLevantada"
	| "DosCartasLevantadas"
	| "PartidaCompleta";

export interface Tablero {
	cartas: Carta[];
	estadoPartida: EstadoPartida;
	indiceCartaVolteadaA?: number;
	indiceCartaVolteadaB?: number;
}

const crearTableroInicial = (): Tablero => ({
	cartas: cartas,
	estadoPartida: "PartidaNoIniciada",
});

export let tablero: Tablero = crearTableroInicial();
