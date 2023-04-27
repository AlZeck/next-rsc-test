import ClientPokemon from "@/components/ClientPokemon";
import Tabs from "@/components/Tabs";
import { Pokemon, getPokemon } from "@/utils/pokeapi";

export async function getServerSideProps({
  query,
}: {
  query: { [key: string]: string | string[] | undefined };
}) {
  const { pokemons } = query;

  const [pokemon1, pokemon2] = (pokemons as string).split(",");

  const pokemon1Data = await getPokemon(pokemon1);
  const pokemon2Data = await getPokemon(pokemon2);
  return {
    props: {
      pokemon1: pokemon1Data,
      pokemon2: pokemon2Data,
    }, // will be passed to the page component as props
  };
}

export default function Home({
  pokemon1,
  pokemon2,
}: {
  pokemon1: Pokemon;
  pokemon2: Pokemon;
}) {
  return (
    <main className="max-w-7 h-screen flex justify-center items-center bg-neutral-100">
      <Tabs
        tab1={<ClientPokemon pokemon={pokemon1} />}
        tab2={<ClientPokemon pokemon={pokemon2} />}
      />
    </main>
  );
}
