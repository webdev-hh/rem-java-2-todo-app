import Main from './Main'
import Board from './Board'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { slugToStatus } from '../services/todoStatusService'

export default function BoardPage({ todos, onAdvance, onRemove }) {
  const [filteredTodos, setFilteredTodos] = useState([])
  const { status } = useParams()
  const statusType = slugToStatus(status)


  useEffect(() => {
    setFilteredTodos(todos.filter(item => item.status === statusType))
  }, [status, todos])

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
