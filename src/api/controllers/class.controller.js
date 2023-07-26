const Class = require("../models/class.models")

const getClass = async (req, res) => {
    
    try {
      const allClass = await Class.find();
      return res.status(200).json(allClass);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  module.exports = { getClass }