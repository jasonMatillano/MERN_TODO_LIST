import { useState, useEffect } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrash2Fill } from 'react-icons/bs'

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

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/'+id)
    .then((res) => {
      console.log(res.data)
      location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then((res) => {
      console.log(res.data)
      location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
  }

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
                <div className='checkbox' onClick={() => handleEdit (todo._id)}>
                   {
                     todo.done
                     ? <BsFillCheckCircleFill className="icon" /> : <BsCircleFill className="icon" />
                   }
                  <p>{todo.todo}</p>
                </div>
                <div>
                  <span onClick={() => handleDelete(todo._id)}><BsFillTrash2Fill className="icon"/></span>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Home