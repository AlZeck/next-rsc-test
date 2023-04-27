import { Pokemon } from "@/utils/pokeapi";

export default function ClientPokemon({ pokemon }: { pokemon: Pokemon }) {
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
