const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Class = require("../api/models/class.models");

const courseArray = [
    {
      name: "Pilates",
      duration: "120 min",
      class:  33,
      type: "strength training"
    },
    {
      name: "Box",
      duration: "45 min",
      class:  22,
      type: "power training"
    },
    {
      name: "natacion",
      duration: "90 min",
      class:  18,
      type: "all-oaround activity"
    }
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allClass = await Class.find();
    if (allClass.length > 0) {
        await Class.collection.drop();
        console.log("collection erase");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const courseMap = courseArray.map((course) => new Class(course));
    await Class.insertMany(courseMap);
    console.log("ok 2");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())