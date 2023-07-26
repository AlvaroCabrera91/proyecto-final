const Coachs = require("../models/coachs.models")

const getCoachs = async (req, res) => {
    
    try {
      const allCoachs = await Coachs.find();
      return res.status(200).json(allCoachs);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  module.exports = { getCoachs }