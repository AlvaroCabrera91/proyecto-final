const mongoose = require("mongoose")

const Schema = mongoose.Schema
const {ObjectId} = mongoose.Schema
const coachSchema = new Schema({
    name: { type: String, requires: true},
    age: { type: Number, requires: true},
    yearsOfExperiencie: { type: Number, requires: true},
    // courses: [{ type: Schema.ObjectId, required: true , ref: 'class' }]
},{
    collection: "coachs"
}
)

const coach = mongoose.model("coachs", coachSchema)
module.exports = coach

