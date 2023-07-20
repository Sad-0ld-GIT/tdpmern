let nbs = require("express")
let server = nbs()

server.set("view engine","ejs")

server.get("/trainer/shafeeq",function(req,res){
    res.render("trainer.ejs", {"tname":"Shafeeq", "taddress": "London"})
    res.end()
})

server.get("/trainer/tadas",function(req,res){
    res.render("trainer.ejs", {"tname":"Tadas", "taddress": "Machester"})
    res.end()
})

server.get("/results/shafeeq",function(req,res){
    res.render("results.ejs", {"sname":"Shafeeq", "phy": 30, "chem": 50, "math": 60 })
    res.end()
})

server.get("/results/phil",function(req,res){
    res.render("results.ejs", {"sname":"Phil", "phy": 25, "chem": 40, "math": 35 })
    res.end()
})

server.get("/results/matt",function(req,res){
    res.render("results.ejs", {"sname":"Matt", "phy": 26, "chem": 33, "math": 44 })
    res.end()
})

server.listen(3000)