import { useState } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';

function Create(props) {

    const url = props.url

    const [todo, setTodo] = useState('')

    const handleAdd = () => {
        axios.post(url+'add', { todo : todo })
        .then((res) => {
            console.log(res.data)
            location.reload()
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

Create.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Create