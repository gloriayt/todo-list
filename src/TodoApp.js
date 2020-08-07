import React, { useState, useEffect } from "react";
import uuid from "uuid/v4"
import "./TodoApp.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Grid from "@material-ui/core/Grid";

function TodoApp(props) {
    const initialTodos = JSON.parse(window.localStorage.getItem("todos")
        || [{id: uuid(), task: "Wash the dog!", isComplete: false}]
    )
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (newTask) => {
        setTodos([...todos, {id: uuid(), task: newTask, isComplete: false}]);
    };
    const deleteTodo = (idToDelete) => {
        const tempTodos = todos.filter(todo => todo.id !== idToDelete);
        setTodos(tempTodos);
    };
    const editTodo = (idToEdit, newText) => {
        const tempTodo = todos.map(todo => 
            todo.id === idToEdit ? {...todo, task: newText} : todo
        );        
        setTodos(tempTodo);
    };
    const toggleComplete = (idToToggle) => {
        const tempTodo = todos.map(todo => 
            todo.id === idToToggle ? {...todo, isComplete: !todo.isComplete} : todo
        );
        setTodos(tempTodo);
    };

    return (
        <Grid container justify="center">
            <Grid item xs={11} md={8} lg={4}/>
            <TodoList 
                todos={todos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
            />
            <TodoForm addTodo={addTodo}/>
        </Grid>
    );
}

export default TodoApp;
