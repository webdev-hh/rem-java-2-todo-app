import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [todos, setTodos] = useState([])

  const addNewTodo = description => {
    axios
      .post('/api/todo', { description, status: 'OPEN' })
      .then(response => response.data)
      .then(newTodoItem => setTodos([...todos, newTodoItem]))
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
      <Main todos={todos} />
    </Page>
  )
}
