import { useState } from 'react'
import Create from './Create.jsx'

function Home() {

  const [todoList, setTodoList] = useState([])

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <Create />
      {
        todoList.length === 0
          ? <h3>No todo items</h3>
          : todoList.map((todo, index) => {
            return (
              <div className="todo-item" key={index}>
                <p>{todo}</p>
              </div>
            )
          })
      }
    </div>
  )
}

export default Home