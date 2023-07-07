// TASK
// connect to MongoDB using Mongoose
// create a schema
// create a model from the schema
// add a disconnect clause to the .then of the connect

// create an object
// read all objects

// EXT
// install prompt-sync 
// (user inputs now)
// make a path for creating an object
// make an option to read all objects
// make an option to update

const prompt = require("prompt-sync")()
const mongoose  = require("mongoose")
const carModel = require("./models.js")

mongoose.connect("mongodb://127.0.0.1:27017").then (() => {
    console.log("Connected!")
    usersChoice()
    // addCar()
    // listCars()
    // findMake()
    // upateCar()
    }).then (() => {
    // mongoose.disconnect()
    // console.log("Disconnected!")
}).catch(err => {
    // console.log("There has been an error")
})

function usersChoice () {
    console.log("1 - add")
    switch (prompt("Enter choice to view, add or edit cars ")) {
        case "add":
        case "1":
            addCar()
            break;
        case "list":
            listCars()
            break;
        case "find":
            findMake()
            break;
        case "update":
            upateCar()
            break;
        case "clear":
            deleteAll()
            break;
        case "exit":
            mongoose.disconnect()
            console.log("Disconnected!")
            break;
        default:
            usersChoice()
    }
}

const addCar = function() {
    carModel.create({
        reg: prompt("Enter reg number "),
        age: prompt("Enter age of car "),
        make: prompt("Enter car make "),
        model: prompt("Enter model "),
        colour: prompt("Enter colour ")
    })
    usersChoice()
}

const listCars = function() {
    carModel.find({}).then(res => {
        for (let car of res) {
            console.log(car)
        }
        usersChoice()
    })
}

const findMake = function() {
    carModel.find({make: prompt("enter car make ")}).then(res => {
        for (let car of res) {
            console.log(car)
        }
        usersChoice()
    })
}

const upateCar = function() {
    carModel.updateOne({_id: prompt("enter car id")}, {
        reg: prompt("Enter reg number "),
        age: prompt("Enter age of car "),
        make: prompt("Enter car make "),
        model: prompt("Enter model "),
        colour: prompt("Enter colour ")
    })
    usersChoice()
}

const deleteAll = function() {
    carModel.deleteMany({}).then(res => {
            console.log("all data deleted")
            usersChoice()
    })
}
