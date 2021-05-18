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

  const advanceTodo = todo => {
    axios
      .put('/api/todo/' + todo.id, {
        ...todo,
        status: getNextStatus(todo.status),
      })
      .then(response => response.data)
      .then(updatedTodo => {
        setTodos(todos.map(item => (item.id === todo.id ? updatedTodo : item)))
      })
      .catch(error => console.error(error))
  }

  const removeTodo = id => {
    axios.delete('/api/todo/' + id).then(() => {
      setTodos(todos.filter(todo => todo.id !== id))
    })
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
      <Main todos={todos} onAdvance={advanceTodo} onRemove={removeTodo} />
    </Page>
  )
}
