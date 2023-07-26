const express = require("express")
const {getCourses,getOneCourse,getOneCourseByName,getOneCourseByType,deleteCourse} = require("../controller/course.controller")

const gymRouter = express.Router()
gymRouter.get("/", getCourses)
gymRouter.get("/:id", getOneCourse)
gymRouter.get("/findByName/:name", getOneCourseByName)
gymRouter.get("/findByType/:Type", getOneCourseByType)
gymRouter.get("/deleted/:deleteCourse", deleteCourse)

module.exports = gymRouter