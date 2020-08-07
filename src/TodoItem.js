import React, { useState } from "react";
import useInputState from "./hooks/useInputState";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Textfield from "@material-ui/core/Textfield";

function TodoItem(props) {
    const todo = props.todoItem;
    const deleteTodo = props.deleteTodo;
    const editTodo = props.editTodo;
    const toggleComplete = props.toggleComplete;
    const [editMode, toggleEdit] = useState(false);
    const [task, changeTask, resetTask] = useInputState("");
    return (
        <ListItem style={{height: "4rem"}}>
            {editMode === true 
                ? 
                <>
                    <form style={{width: "100%"}}
                        onSubmit={(event) => {
                            event.preventDefault();
                            editTodo(todo.id, task);
                            toggleEdit(!editMode)
                    }}>
                    <Textfield 
                        label={todo.task}
                        value={task}
                        onChange={changeTask}
                        autoFocus
                        style={{width: "90%", marginLeft: "1rem"}}
                    />
                    </form>
                </>
                : 
                <>
                    <Checkbox 
                        checked={todo.isComplete}
                        style={{color: '#36332f'}}
                        onClick={()=>toggleComplete(todo.id)}
                    />
                    <ListItemText
                        style={{textDecoration: todo.isComplete ? "Line-through" : ""}}
                    >
                        {todo.task}
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Edit" onClick={() => toggleEdit(!editMode)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton aria-label="Delete" onClick={() => deleteTodo(todo.id)}>
                            <DeleteIcon />   
                        </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    );
}

export default TodoItem;
