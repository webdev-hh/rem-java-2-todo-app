import Main from './Main'
import Board from './Board'
import { useParams } from 'react-router-dom'
import { slugToStatus } from '../services/todoStatusService'

export default function BoardPage({ todos, onAdvance, onRemove }) {
  const { status } = useParams()
  const statusType = slugToStatus(status)

  const filteredTodos = todos.filter(item => item.status === statusType)

  return (
    <Main>
      <Board
        title="Todo"
        todos={filteredTodos}
        onAdvance={onAdvance}
        onRemove={onRemove}
      />
    </Main>
  )
}
