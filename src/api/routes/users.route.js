const express = require('express');
const usersRouter = express.Router();
const {isAuth, isCoach} = require("../../middlewares/auth")
const {getUsers,register,login, userProfile} = require("../controllers/users.constroller")


usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get('/',[isCoach], getUsers);
usersRouter.post('/profile', [isAuth], userProfile);



module.exports = usersRouter;