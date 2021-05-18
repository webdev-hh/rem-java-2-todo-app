import styled from 'styled-components/macro'

export default function Board({ title }) {
  return (
    <Wrapper>
      <summary>
        <h2>{title}</h2>
      </summary>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        aliquam amet aperiam commodi dolorum eum id illo ipsa libero molestias,
        nostrum obcaecati quo saepe sapiente tempore ullam, vel. Ducimus, sint.
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.details`
  h2 {
    display: inline-block;
    margin: 0;
  }
`
