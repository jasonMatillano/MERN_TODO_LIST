import { useState, useEffect } from 'react'
import Create from './Create.jsx'
import axios from 'axios'
import PropTypes from 'prop-types';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrash2Fill } from 'react-icons/bs'

function Home(props) {

  const url = props.url;

  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    axios.get(url+'get')
    .then((res) => {
      setTodoList(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const handleEdit = (id) => {
    axios.put(url+'update/'+id)
    .then((res) => {
      console.log(res.data)
      location.reload()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const handleDelete = (id) => {
    axios.delete(url + 'delete/'+id)
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
      <Create url={url}/>
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

Home.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Home