import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Main from './components/Main'

export default function App() {
  return (
    <Page>
      <Header />
      <AddATodo />
      <Main />
    </Page>
  )
}
