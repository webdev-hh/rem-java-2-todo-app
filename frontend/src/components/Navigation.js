import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Navigation() {
  return (
    <Wrapper>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/todos/open'}>Todo</NavLink>
      <NavLink to={'/todos/doing'}>Doing</NavLink>
      <NavLink to={'/todos/done'}>Done</NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
`
