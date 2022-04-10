import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Main, Html, NextScript } from 'next/document'
import theme from '../service/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
