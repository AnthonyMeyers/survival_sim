import '../styles/globals.css'
import '../styles/main_styles.scss'
import type { AppProps } from 'next/app'
import { wrapper } from "../data/store";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App);