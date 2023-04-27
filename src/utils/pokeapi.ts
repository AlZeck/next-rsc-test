export type Pokemon = {
	name: string;
	sprites: {
		front_default: string;
	};
	types: {
		type: {
			name: string;
		};
	}[];
};
export async function getPokemon(id: number | string) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
	return (await res.json()) as Pokemon;
}
