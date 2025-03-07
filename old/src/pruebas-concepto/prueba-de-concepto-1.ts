import "../style.css";

const pruebaConceptoRandomizarArray = <Generico>(
	listado: Generico[]
): Generico[] => {
	const nuevoListado: Generico[] = [...listado];
	for (let i = listado.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[nuevoListado[i], nuevoListado[j]] = [nuevoListado[j], nuevoListado[i]];
	}
	return nuevoListado;
};

const arrayDePrueba = [1, 2, 3, 4];

console.log("Array de prueba", arrayDePrueba);
console.log("Array randomizado", pruebaConceptoRandomizarArray(arrayDePrueba));
