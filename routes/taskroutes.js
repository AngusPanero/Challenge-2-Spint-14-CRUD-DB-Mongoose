const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.post("/create", async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

router.get("/", async (req, res) => {
    try {
        const task = await Task.find();
        if(!task){
            res.send("404 - No se Han Encontrado Tareas")
        }
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

router.get("/id/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task){
            res.send("404 - No se Han Encontrado Tarea")
        }
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

router.put("/markAsCompleted/:id", async (req, res) => {
    try {
        const { complete } = req.body; // Desestructuro Para Filtrar el Complete
        const task = await Task.findByIdAndUpdate(req.params.id, { $set: { complete } }, { new: true });
        /*El Set me Indica que solo ese valor se Modifica*/

        if(!task){
            res.send("404 - No se Han Encontrado Tarea")
        }
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

router.put("/markAsCompleted/:id", async (req, res) => {
    try {
        const { complete } = req.body; // Desestructuro Para Filtrar el Complete
        const task = await Task.findByIdAndUpdate(req.params.id, { $set: { complete } }, { new: true });
        /*El Set me Indica que solo ese valor se Modifica*/
        
        if(!task){
            res.send("404 - No se Han Encontrado Tarea")
        }
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

router.put("/id/:id", async (req, res) => {
    try {
        const { title } = req.body; 
        const task = await Task.findByIdAndUpdate(req.params.id, { $set: { title } }, { new: true });
        
        if(!task){
            res.send("404 - No se Han Encontrado Tarea")
        }
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

router.delete("/id/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        
        if(!task){
            res.send("404 - No se Han Encontrado Tarea")
        }
        res.status(201).send(task);

    } catch (error) {
        console.error(error);
        res.status(500).send({ Message: "500 - Error en la Solicitud" });
    }
})

module.exports = router;