import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      {/* Outlet - representa de forma generica um conteudo de DeafultLayout */}
      <Outlet />
    </LayoutContainer>
  )
}
