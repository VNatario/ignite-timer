import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
