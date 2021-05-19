import Main from "./Main";
import Board from "./Board";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {slugToStatus} from "../services/todoStatusService";

export default function BoardPage({getTodosByStatus, onAdvance, onRemove}) {
    const [todos, setTodos] = useState([])
    const {status} = useParams()
    const statusType = slugToStatus(status)

    useEffect(() => {
        setTodos(getTodosByStatus(statusType))
    }, [status])

    return (
        <Main>
            <Board
                title="Todo"
                todos={todos}
                onAdvance={onAdvance}
                onRemove={onRemove}
            />
        </Main>
    )
}