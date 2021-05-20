import React from "react"
import {fireEvent, render, screen} from '@testing-library/react'
import {MemoryRouter as Router} from 'react-router-dom'
import TodoItem from "../components/TodoItem"
import {rest} from "msw"
import {setupServer} from 'msw/node'
import axios from "axios";
import useTodos from "../hooks/useTodos"

    //Given
const todo = {
    id: '1',
    status: 'DONE',
    description: 'this is a test'
}

const todo2 = {
    id: '2',
    status: 'OPEN',
    description: 'this is a test'
}

const server = setupServer(
    rest.delete('/api/todo/1', (req, res, ctx) =>{})
)

// establish API mocking before all tests
beforeAll(() => server.listen())
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers())
// clean up once the tests are done
afterAll(() => server.close())

test('Test description', () => {
    //When
    render(
        <Router>
            <TodoItem todo={todo} onAdvance={()=>{}} onRemove={()=> {}} />
        </Router>)

    //Then
    expect(screen.getByText('this is a test')).toBeInTheDocument();
})

test('Advance button should be not displayed for task with DONE status', () => {
    //When
    render(
        <Router>
            <TodoItem todo={todo} onAdvance={()=>{}} onRemove={()=> {}} />
        </Router>
    )

    //Then
    expect(screen.queryByText('Advance')).not.toBeInTheDocument();
})

test('Test delete button', () => {
    //When
    render(
        <Router>
            <TodoItem todo={todo2} onAdvance={()=>{}} onRemove={ () => useTodos.removeTodo} />
        </Router>
    )
    expect(screen.queryByText('Delete')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Delete'));

    //Then
    // expect(screen.queryByText('Delete')).not.toBeInTheDocument();
    // expect(screen.getByText('this is a test')).not.toBeInTheDocument();
})
