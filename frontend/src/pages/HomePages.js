import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Page from '../components/Page'
import AddATodo from '../components/AddATodo'
import Boards from '../components/Boards'
import PropTypes from 'prop-types'

HomePage.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  addNewTodo: PropTypes.func.isRequired,
  advanceTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
}

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
