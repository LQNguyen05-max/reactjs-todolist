import React, { useState } from 'react';

// add a new component called ToDoInput
function ToDoInput(props) {
    const { handleAddToDos, todoValue, setTodoValue } = props;
    
    return (
        <header>
            <input 
                value={todoValue} onChange={(e) => {
                    setTodoValue(e.target.value)
                }} placeholder="Enter a list here..." 
            />
            <button onClick={() => {
                handleAddToDos(todoValue)
                setTodoValue('')
            }}>Add
            </button>
        </header>
    );
}

export default ToDoInput;