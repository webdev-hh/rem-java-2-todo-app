import Board from './Board'
import PropTypes from 'prop-types'
import Main from './Main'

Boards.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdvance: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default function Boards({ todos, onAdvance, onRemove }) {
  const openTodos = todos.filter(item => item.status === 'OPEN')
  const inProgressTodos = todos.filter(item => item.status === 'IN_PROGRESS')
  const doneTodos = todos.filter(item => item.status === 'DONE')

  return (
    <Main>
      <Board
        title="Todo"
        todos={openTodos}
        onAdvance={onAdvance}
        onRemove={onRemove}
      />
      <Board
        title="Doing"
        todos={inProgressTodos}
        onAdvance={onAdvance}
        onRemove={onRemove}
      />
      <Board title="Done" todos={doneTodos} onRemove={onRemove} />
    </Main>
  )
}
