import styled from 'styled-components/macro'

export default function TodoItem({ todo, onAdvance }) {
  return (
    <Todo>
      <p>{todo.description}</p>
      <ButtonGroup>
        <button>Delete</button>
        {onAdvance && (
          <button onClick={() => onAdvance(todo.id)}>Advance</button>
        )}
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
