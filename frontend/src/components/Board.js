import styled from 'styled-components/macro'
import TodoItem from './TodoItem'

export default function Board({ title, todos }) {
  return (
    <Wrapper open>
      <summary>
        <h2>{title}</h2>
      </summary>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
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
