const express = require("express")
const dotenv = require("dotenv").config()
const { connect } = require("./src/utils/db.js")
const allCourses = require("./src/api/routes/course.route.js")
const Trainer = require("./src/api/routes/trainer.route.js")

const server = express()
const PORT = process.env.PORT
connect()

server.use(express.json());
server.use("/courses", allCourses)
server.use("/trainers", Trainer)

server.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))