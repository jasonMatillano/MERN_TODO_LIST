import { useState } from 'react'
import axios from 'axios'

function Create() {

    const [todo, setTodo] = useState('')

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { todo : todo })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="create-container">
            <input type="text" placeholder="Enter todo" onChange={(e) => setTodo(e.target.value)} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Create