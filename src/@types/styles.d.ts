import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// Para poder utilizar as cores como defaulttheme tem que extender do styled components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
