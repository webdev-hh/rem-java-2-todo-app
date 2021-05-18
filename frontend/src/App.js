import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
  const [todos, setTodos] = useState([])

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
      <AddATodo />
      <Main todos={todos} />
    </Page>
  )
}
