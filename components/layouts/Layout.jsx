import { Navbar } from "../ui/Navbar"
import Head from "next/head"

export const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title> Listado de Pokémons </title>
                <meta name="author" content="Laura Mamián" />
                <meta name="description" content='Información sobre el Pokémon' />
                <meta name="keywords" content='listado de pokemons, pokemon, pokedex' />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px',
            }}>
                {children}
            </main>
        </>
    )
}
