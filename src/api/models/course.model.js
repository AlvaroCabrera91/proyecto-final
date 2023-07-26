const mongoose = require("mongoose")


const Schema = mongoose.Schema

const courseSchema = new Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    class: { type: Number, required: true },
    Type: { type: String, required: true },
},
    { collection: "courses" }
)


const Course = mongoose.model("courses", courseSchema)
module.exports = Course