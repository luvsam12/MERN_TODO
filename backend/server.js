const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()



app.use(cors())
app.use(express.json())

app.use('', require('./routes/item'))

mongoose.connect("mongodb+srv://luvsam:luvsam@cluster0.muyhd.mongodb.net/ToDoList?retryWrites=true&w=majority",
                 { useNewUrlParser: true,
                   useUnifiedTopology: true })
.then(() => console.log("DB Connected"))
.catch(() => console.log("DB Not Connected"))
PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started to port number ${PORT}`))