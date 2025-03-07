import { Carta, cartas, Tablero, tablero } from "./modelo";

/*
En el motor nos va a hacer falta un método para barajar cartas
*/
const barajarCartas = (cartas : Carta[]): Carta[] => {
	const nuevoListadoCartas: Carta[] = [...cartas];
	for (let i = cartas.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[nuevoListadoCartas[i], nuevoListadoCartas[j]] = [nuevoListadoCartas[j], nuevoListadoCartas[i]];
	}
	return nuevoListadoCartas;
}
  
/*
Una carta se puede voltear si no está encontrada y no está ya volteada, o no hay dos cartas ya volteadas
*/
const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number ): boolean => {
	const carta = tablero.cartas[indice];

	if (!carta.encontrada && !carta.estaVuelta) {
		return true;
	}
	
	const numeroCartasVolteadas = tablero.cartas.reduce((accumulator, carta) => {
		carta.estaVuelta ? accumulator.cartasVolteadas++ : accumulator.cartasVolteadas;
		return accumulator;
	}, {
		cartasVolteadas: 0,
	});

	if (numeroCartasVolteadas.cartasVolteadas >= 2) {
		return false
	} else {
		return true
	}

}

const voltearLaCarta = (tablero: Tablero, indice: number) : void => {
	const sePuede = sePuedeVoltearLaCarta(tablero, indice);
	if (sePuede) {
		tablero.cartas[indice].imagen;
	}
}

/*
Dos cartas son pareja si en el array de tablero de cada una tienen el mismo id
*/
export const sonPareja = (indiceA: number, indiceB: number, tablero: Tablero): boolean => {
//...
}

/*
Aquí asumimos ya que son pareja, lo que hacemos es marcarlas como encontradas y comprobar si la partida esta completa.
*/
const parejaEncontrada = (tablero: Tablero, indiceA: number, indiceB: number) : void => {
//...
}

/*
Aquí asumimos que no son pareja y las volvemos a poner boca abajo
*/
const parejaNoEncontrada = (tablero: Tablero, indiceA :number, indiceB : number) : void => {
// ...
}

/*
Esto lo podemos comprobar o bien utilizando every, o bien utilizando un contador (cartasEncontradas)
*/
export const esPartidaCompleta(tablero: Tablero) : boolean => {
//...
}

/*
Iniciar partida
*/

export const iniciaPartida = (tablero: Tablero): void => {
	barajarCartas(cartas);
	tablero.estadoPartida = "CeroCartasLevantadas";
};