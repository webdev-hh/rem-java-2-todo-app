import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Boards from './components/Boards'
import useTodos from "./hooks/useTodos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Board from "./components/Board";
import Main from "./components/Main";

export default function App() {

    const { advanceTodo, addNewTodo, removeTodo, openTodos, inProgressTodos, doneTodos} = useTodos();

    return (
        <Router>
            <Page>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route path={"/todos/open"}>
                        <Main>
                        <Board
                            title="Todo"
                            todos={openTodos}
                            onAdvance={advanceTodo}
                            onRemove={removeTodo}
                        />
                        </Main>
                    </Route>
                    <Route path={"/"}>
                        <AddATodo onAddClick={addNewTodo}/>
                        <Boards openTodos={openTodos} inProgressTodos={inProgressTodos} doneTodos={doneTodos} onAdvance={advanceTodo} onRemove={removeTodo}/>
                    </Route>
                </Switch>
            </Page>
        </Router>
    )
}
