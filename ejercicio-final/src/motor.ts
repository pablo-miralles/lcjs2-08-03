import { Carta, Tablero } from "./modelo";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas: Carta[]): Carta[] => {
	const nuevoListadoCartas: Carta[] = [...cartas];
	for (let i = cartas.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[nuevoListadoCartas[i], nuevoListadoCartas[j]] = [
			nuevoListadoCartas[j],
			nuevoListadoCartas[i],
		];
	}
	return nuevoListadoCartas;
};

/*
Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
export const sePuedeVoltearLaCarta = (
	tablero: Tablero,
	indice: number
): boolean => {
	const carta = tablero.cartas[indice];

	if (
		(carta.encontrada && carta.estaVuelta) ||
		carta.estaVuelta ||
		tablero.estadoPartida === "DosCartasLevantadas"
	) {
		return false;
	} else {
		return true;
	}
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
	const item = tablero.cartas[indice];
	if (!item.estaVuelta) {
		item.estaVuelta = true;
	}
};

/*
Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (
	tablero: Tablero,
	indiceA: number,
	indiceB: number
): boolean => {
	const itemA = tablero.cartas[indiceA];
	const itemB = tablero.cartas[indiceB];
	if (itemA.idFoto === itemB.idFoto) {
		return true;
	} else {
		return false;
	}
};

/*
Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
export const parejaEncontrada = (
	tablero: Tablero,
	indiceA: number,
	indiceB: number
): void => {
	const itemA = tablero.cartas[indiceA];
	const itemB = tablero.cartas[indiceB];
	const todasLasCartasEstanEncontradas: boolean = esPartidaCompleta(tablero);

	itemA.encontrada = true;
	itemB.encontrada = true;

	if (todasLasCartasEstanEncontradas) {
		tablero.estadoPartida = "PartidaCompleta";
	}
};

/*
Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
export const parejaNoEncontrada = (
	tablero: Tablero,
	indiceA: number,
	indiceB: number
): void => {
	const itemA = tablero.cartas[indiceA];
	const itemB = tablero.cartas[indiceB];

	itemA.estaVuelta = false;
	itemB.estaVuelta = false;
};

/*
Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
const esPartidaCompleta = (tablero: Tablero): boolean => {
	return tablero.cartas.every((carta) => carta.encontrada);
};

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero): void => {
	tablero.cartas.forEach((carta) => {
		carta.estaVuelta = false;
		carta.encontrada = false;
	});
	tablero.cartas = barajarCartas(tablero.cartas);
	tablero.estadoPartida = "CeroCartasLevantadas";
	tablero.indiceCartaVolteadaA = undefined;
	tablero.indiceCartaVolteadaB = undefined;
};

export const establecerCartaAOB = (tablero: Tablero, idCarta: number): void => {
	if (
		tablero.indiceCartaVolteadaA === undefined &&
		tablero.indiceCartaVolteadaB === undefined &&
		tablero.estadoPartida === "CeroCartasLevantadas"
	) {
		tablero.indiceCartaVolteadaA = idCarta;
		tablero.estadoPartida = "UnaCartaLevantada";
	} else if (
		tablero.indiceCartaVolteadaB === undefined &&
		tablero.estadoPartida === "UnaCartaLevantada"
	) {
		tablero.indiceCartaVolteadaB = idCarta;
		tablero.estadoPartida = "DosCartasLevantadas";
	}
};

export const prepararTableroParaSiguienteJugada = (tablero: Tablero): void => {
	tablero.estadoPartida = "CeroCartasLevantadas";
	tablero.indiceCartaVolteadaA = undefined;
	tablero.indiceCartaVolteadaB = undefined;
};
