import Board from './Board'
import styled from 'styled-components/macro'

export default function Main({ todos }) {
  const openTodos = todos.filter(todo => todo.status === 'OPEN')
  const inProgressTodos = todos.filter(todo => todo.status === 'IN_PROGRESS')
  const doneTodos = todos.filter(todo => todo.status === 'DONE')

  return (
    <Wrapper>
      <Board title="Todo" todos={openTodos} />
      <Board title="Doing" todos={inProgressTodos} />
      <Board title="Done" todos={doneTodos} />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 24px;
  overflow-y: scroll;
  display: grid;
  grid-gap: 24px;
`
