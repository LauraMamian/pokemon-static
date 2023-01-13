import { Card, Grid, Row, Text } from "@nextui-org/react";

import { pokeApi } from "../api";
import { Layout } from "../components/layouts";

export default function HomePage({ pokemons }) {

  console.log(pokemons);

  return (
    <>
      <Layout>
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map(({ id, name, image }) => (
              <Grid xs={6} sm={3} md={2} xl={1} key={id}>
                <Card isHoverable isPressable>
                  <Card.Body css={{ p: 1 }}>
                    <Card.Image
                      src={image}
                      width='100%'
                      height={140}
                    />
                  </Card.Body>
                  <Card.Footer>
                    <Row justify='space-between'>
                      <Text transform="capitalize">{name}</Text>
                      <Text> #{id}</Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
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