import styled from 'styled-components/macro'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'

Board.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })).isRequired,
    onAdvance: PropTypes.func,
    onRemove: PropTypes.func.isRequired

}

export default function Board({ title, todos, onAdvance, onRemove }) {
  return (
    <Wrapper open>
      <summary>
        <h2>{title}</h2>
      </summary>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem todo={todo} onAdvance={onAdvance} onRemove={onRemove} />
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.details`
  h2 {
    display: inline-block;
    margin: 0;
  }

  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 24px;
  }
`
