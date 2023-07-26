const Trainer = require("../models/trainer.model")

const getAllTrainers = async (req, res) => {
    try {
        const allTrainers = await Trainer.find().populate("courses")

        return res.status(200).json(allTrainers)
    } catch (error) {
        return res.status(500).json(error)
    }
}


const postTrainer = async (req, res) => {
    try {
        const newTrainer = new Trainer(req.body)
        const createdTrainer = await newTrainer.save()
        return res.status(201).json(createdTrainer)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const putTrainer = async (req, res) => {
    try {
        const { id } = req.params
        const putTrainer = new Trainer(req.body)
        putTrainer._id = id;
        const updateTrainer = await Trainer.findByIdAndUpdate(id, putTrainer, { new: true })
        if (!updateTrainer) {
            return res.status(404).json({ message: "no existe un trainer con este id" })
        }
        return res.status(200).json(updateTrainer)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteTrainer = async (req, res) => {
    try {
        const { id } = req.params
        const deleteTrainer = await Trainer.findByIdAndDelete(id)
        if (!deleteTrainer) {
            return res.status(404).json({ message: "este id no existe" })
        }
        return res.status(200).json(deleteTrainer)
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getAllTrainers, postTrainer, putTrainer, deleteTrainer }