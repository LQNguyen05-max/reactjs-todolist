import React from 'react'

//  add a new component called ToDoList
export default function ToDoCard(props) {
    const { children, handleDeleteToDos, handleEditToDos, index} = props

    return (
        <li className='todoItem'>
            {children}
            <div className="actionsContainer">
                <button onClick={() => {
                    handleEditToDos(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteToDos(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>    
            </div>    
        </li>
    );
}
