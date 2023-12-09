import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './todocontext'
import { useEffect } from 'react'
import { Todoform } from './todoforms'
import { Todolist } from './Todolist'
function App() {
  const [todos, settodos] = useState([])
  const addtodo = (todo) => {
    settodos((prev) => [{ id: Math.random(), ...todo }, ...prev])
  }
  const updatetodo = (id, todo) => {
    settodos((prev) => prev.map((eachval) => eachval.id == id ? todo : eachval))
  }
  const deletetodo = (id) => {
    settodos((prev) => prev.filter((eachval) => eachval.id != id))
  }
  const toggle = (id) => {
    settodos((prev) => prev.map((eachval) => eachval.id == id ? { ...eachval, complete: !eachval.complete } : eachval))
  }
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos, todos.length > 0) {
      settodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  return (
    <><div className='todo-header'>
      <img src="https://www.computerhope.com/jargon/t/task.jpg" height="50px" />
      
      <h2 >Add Your Task</h2>
    </div>
      <Todoprovider value={{ todos, updatetodo, deletetodo, toggle, addtodo }}>
        <div style={{ alignSelf: 'center' }}>
          <center><Todoform /></center>
        </div>
        <div>
          <center>{
            todos.map((todo) => (
              <div key={todo.id}>
                <Todolist todo={todo} />
              </div>
            ))
          }</center>
        </div>

      </Todoprovider>
    </>
  )
}

export default App
