import Main from '../components/Main'
import Board from '../components/Board'
import { useParams } from 'react-router-dom'
import { slugToStatus } from '../services/todoStatusService'
import Header from '../components/Header'
import Page from '../components/Page'
import Navigation from '../components/Navigation'
import styled from 'styled-components/macro'

export default function BoardPage({ todos, onAdvance, onRemove }) {
  const { status } = useParams()
  const statusType = slugToStatus(status)

  const filteredTodos = todos.filter(item => item.status === statusType)

  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Main>
        <Board
          title="Todo"
          todos={filteredTodos}
          onAdvance={onAdvance}
          onRemove={onRemove}
        />
      </Main>
    </Wrapper>
  )
}

const Wrapper = styled(Page)`
  grid-template-rows: min-content min-content 1fr;
`
