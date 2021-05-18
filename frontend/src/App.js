import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Main from './components/Main'
import useTodos from "./hooks/useTodos";

export default function App() {

const {todos, advanceTodo, addNewTodo, removeTodo} = useTodos();

  return (
    <Page>
      <Header />
      <AddATodo onAddClick={addNewTodo} />
      <Main todos={todos} onAdvance={advanceTodo} onRemove={removeTodo} />
    </Page>
  )
}
