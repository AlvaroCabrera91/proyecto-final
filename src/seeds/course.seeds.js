const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Courses = require("../api/models/course.model");

const courseArray = [
    {
      name: "Pilates",
      duration: "120 min",
      class:  33,
      Type: "strength training"
    },
    {
      name: "Box",
      duration: "45 min",
      class:  22,
      Type: "power training"
    },
    {
      name: "natacion",
      duration: "90 min",
      class:  18,
      Type: "all-oaround activity"
    }
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allCourses = await Courses.find();
    if (allCourses.length > 0) {
        await Courses.collection.drop();
        console.log("Sorry, we didn't find norhing!");
    }
})
.catch((error)=> console.log("Retry",error))
.then(async ()=> {
    const courseMap = courseArray.map((course) => new Courses(course));
    await Courses.insertMany(courseMap);
    console.log("Try with another name");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())