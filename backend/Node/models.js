const mongoose = require("mongoose")

const carSchema = new mongoose.Schema({
    reg:String,
    age:Number,
    make:String,
    model:String,
    colour:String
})

const carModel = mongoose.model("Car", carSchema)

module.exports = carModel

