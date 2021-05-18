import styled from 'styled-components/macro'
import { useState } from 'react'

export default function AddATodo({ onAddClick }) {
  const [description, setDescription] = useState('')

  const handeAddClick = () => {
    onAddClick(description)
    setDescription('')
  }

  return (
    <Wrapper>
      <input
        type="text"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <button onClick={handeAddClick}>Add</button>
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
