import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

export default function HomePage({pokemons}) {

  console.log(pokemons);

  return (
    <>
      <Layout title='Listado de Pokémons'>
        <ul>
          {
            pokemons.map( ({id, name}) => (
              <li key={id}>
                #{id} - {name}
              </li>
            ))
          }
        </ul>
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