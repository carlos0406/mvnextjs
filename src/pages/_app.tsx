import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/themes/theme'
import { Header } from '../components/Header'
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
