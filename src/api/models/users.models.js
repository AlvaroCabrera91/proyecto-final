const mongoose = require("mongoose")

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: { type: String, requires: true},
    age: { type: Number, requires: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    // courses: [{ type: ObjectId, required: true , ref: "class" }],
},{
    collection: "users"
}
)

const users = mongoose.model("users", usersSchema)
module.exports = users