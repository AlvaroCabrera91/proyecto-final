const Users = require("../models/users.models")
const bcrypt = require("bcrypt");
const {generateSign} = require("../../utils/jwt")
const {validateEmail,validatePassword,usedEmail} = require("../../utils/validators")

const getUsers = async (req, res) => {
    
    try {
      const allUsers = await Users.find();
      return res.status(200).json(allUsers);
    } catch (error) {
      return res.status(500).json(error);
    }
};



const register = async (req, res ) => {
    try {
        const newUser = new Users(req.body)
        // console.log(req.body);
        if (!validateEmail(newUser.email)) {
            return res.status(400).json({message:" email invalido"})
        }
        if (!validatePassword(newUser.password)) {
            return res.status(400).json({message:" password invalido"})
        }
        if (await usedEmail(newUser.email)) {
            return res.status(400).json({message:" email introducido ya existe"})
        }

        newUser.password = bcrypt.hashSync(newUser.password,10);
        const createdUser = await newUser.save();

        return res.status(201).json(createdUser);


    } catch (error) {
        return res.status(500).json(error)
    }
};

const login = async (req, res) => {
    try {
        const userInfo = await Users.findOne({email:req.body.email})
        // console.log(userInfo);
        if (!userInfo) {
            return res.status(404).json({message:"email no encontrado"})
        }
        if (!bcrypt.compareSync(req.body.password,userInfo.password)) {
            return res.status(404).json({message:"password incorrecto"})
        }
       const token = generateSign(userInfo._id,userInfo.email);

       return res.status(200).json({user:userInfo,token:token})

    } catch (error) {
        return res.status(500).json(error)
    }
}
module.exports={register,login,getUsers }
