const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")

const {connect} = require("./src/utils/db")
const comidaRoutes = require("./src/api/routes/comida.routes")
const restaurantesRoutes = require("./src/api/routes/restaurante.routes")
const userRoutes = require("./src/api/routes/user.routes")

const PORT = process.env.PORT;
const app = express();

connect()
app.use(cors(
    {
        origin:"*",
        credentials:true
    }
))
app.use(express.json())

app.use("/restaurantes",restaurantesRoutes);
app.use("/comidas",comidaRoutes);
app.use("/users",userRoutes);

app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))

