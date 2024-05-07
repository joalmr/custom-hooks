import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodo = () => {
    // const [state, dispatch] = useReducer(first, second, third)
    const [todos, dispatchTodo] = useReducer(todoReducer, [], init)

    useEffect(() => {
        // console.log(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const onNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatchTodo(action)
    }

    const onDeleteTodo = (id) => {

        dispatchTodo({
            type: 'Delete Todo',
            payload: id,
        })
    }

    const onToggleTodo = (id) => {

        dispatchTodo({
            type: 'Toggle Todo',
            payload: id,
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo,
    }
}