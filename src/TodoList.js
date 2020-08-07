import React, { useState } from "react";
import TodoItem from "./TodoItem"
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function TodoList(props) {
    const todos = props.todos;
    const deleteTodo = props.deleteTodo;
    const editTodo = props.editTodo;
    const toggleComplete = props.toggleComplete;
    return (
        <Paper style={{marginLeft:"3rem", marginRight:"3rem",width:"100%"}}>
            <List>
                {todos.length < 1 ? <p style={{marginLeft:"3rem"}}>Nothing to do!</p> 
                : todos.map((todo) =>
                    <>
                    <TodoItem 
                        todoItem={todo}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        toggleComplete={toggleComplete}
                    />
                    <Divider />
                    </>
                )}
            </List>
        </Paper>
    );
}

export default TodoList;
