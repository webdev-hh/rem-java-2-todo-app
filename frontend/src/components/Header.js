import styled from 'styled-components/macro'

export default function Header() {
  return (
    <Wrapper>
      <h1>Super Kanban</h1>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  text-align: center;
`
