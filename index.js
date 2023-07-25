


const PORT = process.env.PORT;
const app = express();


app.use(express.json())

app.listen(PORT,() => console.log(`escuchando en el puerto http://localhost:${PORT}`))

