import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
import AddATodo from '../components/AddATodo'
import Boards from '../components/Boards'
import { Route } from 'react-router-dom'

export default function HomePage({
  todos,
  addNewTodo,
  advanceTodo,
  removeTodo,
}) {
  return (
    <Page>
      <Header />
      <Navigation />
      <AddATodo onAddClick={addNewTodo} />
      <Boards todos={todos} onAdvance={advanceTodo} onRemove={removeTodo} />
    </Page>
  )
}
