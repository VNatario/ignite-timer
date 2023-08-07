import { Routes, Route } from 'react-router-dom'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      {/* Aplicando Default layout em todas as rotas que comecem com '/' */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
