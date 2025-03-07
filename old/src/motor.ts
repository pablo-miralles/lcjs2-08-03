import { estadoPartida, listadoInicialDeTarjetasDuplicado } from "./modelo";

/* const randomizarArray = <Generico>(listado: Generico[]): Generico[] => {
	const nuevoListado: Generico[] = [...listado];
	for (let i = listado.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[nuevoListado[i], nuevoListado[j]] = [nuevoListado[j], nuevoListado[i]];
	}
	return nuevoListado;
}; */

export const generarPartida = () => {
	estadoPartida.tarjetas = listadoInicialDeTarjetasDuplicado;
};
