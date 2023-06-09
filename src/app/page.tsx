import Pokemon from "@/components/Pokemon";
import Tabs from "@/components/Tabs";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { pokemons } = searchParams;

  const [pokemon1, pokemon2] = (pokemons as string).split(",");
  return (
    <main className="max-w-7 h-screen flex justify-center items-center bg-neutral-100">
      <Tabs tab1={<Pokemon id={pokemon1} />} tab2={<Pokemon id={pokemon2} />} />
    </main>
  );
}
