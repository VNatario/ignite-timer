import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Guardando o valor inferido de forma automatica pelo TS das props que existem dentro do defaultTheme dentro da const ThemeType
type ThemeType = typeof defaultTheme

//Adicionando uma tipagem para o modulo styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
