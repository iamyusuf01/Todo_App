//import the model
const Todo = require("../models/Todo")

//define route handler

exports.getTodo = async(req, res) => {
    try {
        //fetch all todos from database
        const todos = await Todo.find({});

        //response with a success flag and data
        res.status(200)
        .json({
            success: true,
            data: todos,
            message: 'entire todo data fetched successfully'
        });
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: err.message,
        }); 
    }
}

exports.getTodoById = async(req, res) => {
    try {
        //extract todo items basis on id
        const todo = await Todo.findById({_id: id});

        //data forgiven id not found
        if(!todo) {
            return res.status(404)
            .json({
                success: false,
                data: 'Not Found',
                message: 'Todo not found with this id'
            })
        }
        //data for given id found
        res.status(200)
        .json({
            success: true,
            data: todo,
            message: 'Todo data fetched successfully'
        });
    } 
     catch (err) {
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: 'Internal Server Error',
            message: err.message,
        }); 
    }
}