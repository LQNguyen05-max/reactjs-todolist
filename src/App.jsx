import {useState, useEffect} from 'react'
import ToDoList from "./components/ToDoList"
import ToDoInput from "./components/ToDoInput"

// function App() defined
function App() {

  // useState() hook to create a state variable
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function persistToDos(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddToDos(newToDo) {
    const newToDoList = [...todos, newToDo]
    persistToDos(newToDoList)
    setTodos(newToDoList)
  }

  function handleDeleteToDos(index) {
    const newToDoList = todos.filter((todo, toDoIndex) => {
      // test console.log(toDoIndex, index)
      return toDoIndex !== index
    })
    persistToDos(newToDoList)
    setTodos(newToDoList)
  }

  function handleEditToDos(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteToDos(index)
  }
  
  useEffect(() => {
    if (!localStorage) {
      return
    }
    
    let localStorageToDos = localStorage.getItem('todos')
    if (!localStorageToDos) {
      return
    }

    console.log(localStorageToDos)
    localStorageToDos = JSON.parse(localStorageToDos).todos
    setTodos(localStorageToDos)

  }, [])

  return (
    <>
      <h1>My To-Do List</h1>
      <ToDoInput handleAddToDos={handleAddToDos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <ToDoList handleEditToDos={handleEditToDos} handleDeleteToDos={handleDeleteToDos} todos={todos}/>
    </>
  )
}

export default App
