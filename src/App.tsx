import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Button } from './components/Buton'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant='primary' />
      <Button variant='secondary' />
      <Button variant='success' />
      <Button />

      <GlobalStyle />
    </ThemeProvider>
  )
}
