import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getNextStatus } from './services/todoStatusService'

export default function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = description => {
    axios
      .post('/api/todo', { description, status: 'OPEN' })
      .then(response => response.data)
      .then(newTodoItem => setTodos([...todos, newTodoItem]))
      .catch(error => console.error(error))
  }

  const advanceTodo = id => {
    const oldTodo = todos.find(todo => todo.id === id)
    axios
      .put('/api/todo/' + id, {
        ...oldTodo,
        status: getNextStatus(oldTodo.status),
      })
      .then(response => response.data)
      .then(updatedTodo => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)))
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    axios
      .get('/api/todo')
      .then(response => response.data)
      .then(todos => setTodos(todos))
      .catch(error => console.error(error))
  }, [])

  return (
    <Page>
      <Header />
      <AddATodo onAddClick={addNewTodo} />
      <Main todos={todos} onAdvance={advanceTodo} />
    </Page>
  )
}
