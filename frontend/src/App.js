import Page from './components/Page'
import Header from './components/Header'
import AddATodo from './components/AddATodo'
import Boards from './components/Boards'
import useTodos from "./hooks/useTodos";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import BoardPage from "./components/BoardPage";

export default function App() {

    const {advanceTodo, addNewTodo, removeTodo, openTodos, inProgressTodos, doneTodos, getTodosByStatus} = useTodos();

    return (
        <Router>
            <Page>
                <Header/>
                <Navigation/>
                <Switch>
                    <Route path={["/", "/home"]} exact>
                        <AddATodo onAddClick={addNewTodo}/>
                        <Boards
                            openTodos={openTodos}
                            inProgressTodos={inProgressTodos}
                            doneTodos={doneTodos}
                            onAdvance={advanceTodo}
                            onRemove={removeTodo}/>
                    </Route>
                    <Route path={"/todos/:status"}>
                        <BoardPage getTodosByStatus={getTodosByStatus}
                                   onAdvance={advanceTodo}
                                   onRemove={removeTodo}
                        />
                    </Route>

                </Switch>
            </Page>
        </Router>
    )
}
