import useTodos from './hooks/useTodos'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BoardPage from './pages/BoardPage'
import HomePage from './pages/HomePages'

export default function App() {
  const { todos, advanceTodo, addNewTodo, removeTodo } = useTodos()

  return (
    <Router>
      <Switch>
        <Route path={['/', '/home']} exact>
          <HomePage
            todos={todos}
            addNewTodo={addNewTodo}
            removeTodo={removeTodo}
            advanceTodo={advanceTodo}
          />
        </Route>
        <Route path={'/todos/:status'}>
          <BoardPage
            todos={todos}
            onAdvance={advanceTodo}
            onRemove={removeTodo}
          />
        </Route>
      </Switch>
    </Router>
  )
}
