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
`
