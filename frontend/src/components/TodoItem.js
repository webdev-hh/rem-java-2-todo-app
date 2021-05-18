import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    }).isRequired,
    onAdvance: PropTypes.func,
    onRemove: PropTypes.func.isRequired
}

export default function TodoItem({todo, onAdvance, onRemove}) {
    return (
        <Todo>
            <p>{todo.description}</p>
            <ButtonGroup>
                <button onClick={() => onRemove(todo.id)}>Delete</button>
                {onAdvance && <button onClick={() => onAdvance(todo)}>Advance</button>}
            </ButtonGroup>
        </Todo>
    )
}

const Todo = styled.section`
  border: 1px solid black;
  border-radius: 4px;
  padding: 24px;

  p {
    text-align: center;
  }
`
const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`
