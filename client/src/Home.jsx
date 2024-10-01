import { useState, useEffect } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import { BsCircleFill, BsFillTrash2Fill } from 'react-icons/bs'

function Home() {

  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then((res) => {
      setTodoList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

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
                <div className='checkbox' onClick={handleEdit}>
                  <BsCircleFill className="icon" />
                  <p>{todo.todo}</p>
                </div>
                <div>
                  <span><BsFillTrash2Fill className="icon"/></span>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Home