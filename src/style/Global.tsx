import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'SuperScript', sans-serif;
  }
  body {
    background-image: url('/images/egg/bg.svg');
    background-repeat: no-repeat;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
