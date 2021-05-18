import styled from 'styled-components/macro'

export default function AddATodo() {
  return (
    <Wrapper>
      <input type="text" /> <button>Add</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 24px;

  input {
    margin-right: 12px;
    flex-grow: 1;
  }
`
