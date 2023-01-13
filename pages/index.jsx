import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";
import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

export default function HomePage({ pokemons }) {

  return (
    <>
      <Layout>
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

// Ejecucion en el lado del servidor
export const getStaticProps = async (ctx) => {

  const { data } = await pokeApi.get('/pokemon?limit=151');

  const pokemons = data.results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
    url: pokemon.url
  }));

  return {
    props: {
      pokemons
    }
  }
}