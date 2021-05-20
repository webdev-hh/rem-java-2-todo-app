import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Page from '../components/Page'
import Main from '../components/Main'
import styled from 'styled-components/macro'
import {useState} from 'react'
import EditTodoForm from "../components/EditTodoForm";


EditPage.propTypes = {
    todo:PropTypes.shape({
            status: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }
    ).isRequired,
}

export default function EditPage({ todos, updateTodo}) {
/*
    useEffect(() => {


    }, []);
*/
    const { id } = useParams()
    const todo = todos.find(item => item.id === id)




    return (
        <Wrapper>
            <Header />
            <Navigation />
            <Main>
                {todo &&<EditTodoForm todo={todo} updateTodo ={updateTodo}></EditTodoForm> }

            </Main>
        </Wrapper>
    )


}


const Wrapper = styled(Page)`
  grid-template-rows: min-content min-content 1fr;
`