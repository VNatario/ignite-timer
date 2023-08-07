import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

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
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Nome da tarefa</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>Concluido</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
