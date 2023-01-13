import { Navbar } from "../ui/Navbar"
import Head from "next/head"

export const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title> {title} </title>
                <meta name="author" content="Laura Mamián" />
                <meta name="description" content={`Información sobre el Pokémon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
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
