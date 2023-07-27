const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Coachs = require("../api/models/coachs.models");

const coachsArray = [
    {
        name: "Alvaro",
        age: 32,
        yearsOfExperiencie: 5,
        courses: ["64c0f53c42bdfc4ee08a7948","64c0f53c42bdfc4ee08a7949"]
    },
    {
        name: "Adriana",
        age: 22,
        yearsOfExperiencie: 9,
        courses: ["64c0f53c42bdfc4ee08a7949","64c0f53c42bdfc4ee08a794a"]
    },
    {
        name: "Antonio",
        age: 42,
        yearsOfExperiencie: 1,
        courses: ["64c0f53c42bdfc4ee08a7948","64c0f53c42bdfc4ee08a794a"]

    },
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allCoachs = await Coachs.find();
    if (allCoachs.length > 0) {
        await Coachs.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const coachsMap = coachsArray.map((course) => new Coachs(course));
    await Coachs.insertMany(coachsMap);
    console.log("ok 2");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())