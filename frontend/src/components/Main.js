import Board from './Board'
import styled from 'styled-components/macro'

export default function Main() {
  return (
    <Wrapper>
      <Board title="Todo" />
      <Board title="Doing" />
      <Board title="Done" />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 24px;
  overflow-y: scroll;
  display: grid;
  grid-gap: 24px;
`
