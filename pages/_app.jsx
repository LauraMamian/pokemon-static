import { NextUIProvider } from '@nextui-org/react'
import { darkTheme } from '../themes'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}