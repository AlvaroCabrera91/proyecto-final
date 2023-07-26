const Course = require("../models/course.model")



const getCourses = async (req, res) => {
    try {

        const allCourses = await Course.find()

        return res.status(200).json(allCourses)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const getOneCourse = async (req, res) => {
    try {
        const { id } = req.params
        const oneCourse = await Course.findById(id)
        return res.status(200).json(oneCourse)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const getOneCourseByName = async (req, res) => {
    try {
        const {name} = req.params
        const oneCourseByName = await Course.findOne({name:req.params.name});
        return res.status(200).json(oneCourseByName)

    } catch (error) {
        return res.status(500).json(error)
    }
}

const getOneCourseByType = async (req, res) => {
    try {
        const {Type} = req.params
        const oneCourseByType = await Course.find({genere:req.params.Type});
        return res.status(200).json(oneCourseByType)

    } catch (error) {
        return res.status(500).json(error)
    }
}
const deleteCourse= async (req, res) => {
    try {
        const { id } = req.params
        const deleteCourse = await Course.findByIdAndDelete(id)
        if (!deleteCourse) {
            return res.status(404).json({ message: "este id no existe" })
        }
        return res.status(200).json(deleteCourse)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getCourses, getOneCourse, getOneCourseByName, getOneCourseByType,deleteCourse}