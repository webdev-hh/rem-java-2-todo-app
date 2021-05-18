import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Main from './components/Main'

const todos = [
  {
    id: '976f37f4-8aa7-481d-ad2c-2120613f3347',
    description: 'Write tests',
    status: 'OPEN',
  },
  {
    id: '61084198-b1b7-4d7c-837c-62f458ce765a',
    description: 'Drink coffee',
    status: 'IN_PROGRESS',
  },
  {
    id: '4f5cf145-d5f7-430f-8e0e-048ea3c1fc68',
    description: 'Buy milk',
    status: 'DONE',
  },
]

export default function App() {
  return (
    <Page>
      <Header />
      <AddATodo />
      <Main todos={todos} />
    </Page>
  )
}
