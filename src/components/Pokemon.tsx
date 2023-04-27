// define the type for the pokemon object from PokeAPI

import { getPokemon } from "@/utils/pokeapi";
import RSC from "@/utils/sfc";
async function Pokemon({ id }: { id: number | string }) {
  const pokemon = await getPokemon(id);
  return (
    <div className="flex flex-col items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2 className="text-2xl font-bold capitalize">{pokemon.name}</h2>
      <div className="flex">
        {pokemon.types.map((type) => (
          <div
            key={type.type.name}
            className="flex-1 p-2 text-center capitalize"
          >
            {type.type.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RSC(Pokemon);
