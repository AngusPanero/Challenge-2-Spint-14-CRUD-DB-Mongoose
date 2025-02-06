const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title: String,
    complete: Boolean,
    }, { timestamps: true });

const task = mongoose.model("task", TaskSchema);

module.exports = task