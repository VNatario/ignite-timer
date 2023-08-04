import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      {/* Outlet - representa de forma generica um conteudo de DeafultLayout */}
      <Outlet />
    </div>
  )
}
