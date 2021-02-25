'use strict';
const router = require('express').Router();
const { Task } = require("../config/db");


// ? GET ALL
router.get("/getAll", (req, res, next) => {
    Task.find((err, tasks) => {
        if (err) {
            next(err);
        }
        res.send(tasks);
    });
});

// ? GET ONE
router.get("/get/:id", (req,res,next) => {
    Product.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

// ? CREATE
router.post("/create", (req, res, next) => {
    const task = new Task(req.body);
    task.save()
        .then((result) => {
            res.status(201).send(`${result.taskName} has been added successfully!`)
        })
        .catch((err) => next(err));
});

// ? DELETE
router.delete("/delete/:id", (req, res, next) => {
    Task.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted`);
    });
});

// ? PARTIAL UPDATE
router.patch("/update/:id", (req, res, next) => {
   Task.findByIdAndUpdate(req.params.id, 
    req.body, 
    {new: true}, 
    (err) => {
       if(err){
           next(err);
       }
       res.status(202).send(`Successfully updated!`);
   })
});

// ? REPLACE
router.put("/replace/:id", (req,res,next) => {
    const {taskName, deadline, completed} = req.query;
    Product.findByIdAndUpdate(req.params.id, {taskName,deadline,completed}, {new: true}, (err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});


module.exports = router; 