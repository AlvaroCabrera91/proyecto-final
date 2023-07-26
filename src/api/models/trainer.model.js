const mongoose = require("mongoose")

const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema; 

const trainerSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birthdayirthday: { type: Number, required: true },
    courses: [{ type: ObjectId, required: true , ref: "courses" }],
},
    { collection: "Trainers" }
)

const Trainer = mongoose.model("Trainer", trainerSchema)
module.exports = Trainer