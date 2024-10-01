const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/todolist')
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err)
})
    
app.get('/get', (req, res) => {
    TodoModel.find()
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        res.json(err)
    })
})

app.post('/add', (req, res) => {
    const todo = req.body.todo
    TodoModel.create({ todo })
    .then(() => {
        console.log('Todo added')
    })
    .catch((err) => {
        console.log(err)
    })
})


app.listen(3001, () => {
    console.log('Server started on http://localhost:3001')
})