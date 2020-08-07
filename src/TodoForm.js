import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Paper from "@material-ui/core/Paper";
import Textfield from "@material-ui/core/Textfield";

function TodoForm(props) {
    const addTodo = props.addTodo;
    const [task, changeTask, resetTask] = useInputState("");
    return (
        <Paper style={{margin: "3rem", width:"100%"}}>
            <form onSubmit={(event) => {
                event.preventDefault();
                addTodo(task);
                resetTask();
            }}>
            <Textfield style={{marginBottom:"1.5rem", marginLeft:"1.5rem", marginRight:"1.5rem", width:"92%"}}
                label="Add a new task"
                value={task}
                onChange={changeTask}
                fullWidth
            />
            </form>
        </Paper>
    );
}

export default TodoForm;
