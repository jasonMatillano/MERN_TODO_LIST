const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://mongo-container:27017/todolist')
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

app.put('/update/:id', (req, res) => {
    const { id } = req.params;

    // Find the document by ID first
    TodoModel.findById(id)
    .then((todoItem) => {
        if (!todoItem) {
            return res.status(404).json({ error: "Todo item not found" });
        }

        // Toggle the `done` value
        TodoModel.findByIdAndUpdate(id, { done: !todoItem.done }, { new: true }) // `new: true` to return the updated document
        .then((updatedTodo) => {
            res.json(updatedTodo);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({ error: "An error occurred while updating the todo item" });
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An error occurred while fetching the todo item" });
    });
});


app.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndDelete(id)
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/add', (req, res) => {
    const { todo } = req.body
    TodoModel.create({ todo })
    .then((result) => {
        res.json(result)
    })
    .catch((err) => {
        console.log(err)
    })
})


app.listen(3001, () => {
    console.log('Server started on http://localhost:3001')
})