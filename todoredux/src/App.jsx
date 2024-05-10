import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo, toggleComplete, deleteTodo } from './redux/slice/todoSlice'

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // const [showModal, setShowModal] = useState(false);
  // const [editedTodo, setEditTodo] = useState({})

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };


  return (
    <>
      <div>
        <input type="text" value={text} onChange={handleInputChange} />{" "}
        <button onClick={handleAddTodo}> Add Todo </button>{" "}
        <ul>
          {" "}
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <input type="checkbox" onClick={() => handleToggleComplete(todo.id)} />
              {todo.text}{" "}
              {/* <button onClick={() => handleToggleComplete(todo.id)}>
                {" "}
                {todo.completed ? "Mark Incomplete" : "Mark Complete"}{" "}
              </button>{" "} */}
              <button onClick={() => handleDeleteTodo(todo.id)}> Delete </button>{" "}
              <button>Edit</button>
            </li>
          ))}{" "}
        </ul>{" "}
      </div>
    </>
  )
}
export default App
