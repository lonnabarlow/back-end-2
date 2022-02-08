const express = require('express')
const cors = require ('cors')
const app = express()

const {getHouses, createHouse, updateHouse, deleteHouse} = require("./controller")
app.use(express.json())
app.use(cors())





//endpoints
app.get("/api/houses", getHouses)
app.post("/api/houses", createHouse)
app.put("/api/houses/:id", updateHouse)
app.delete("/api/houses/:id", deleteHouse )

app.listen(4010, () => console.log(" Server is running on port 4010"))