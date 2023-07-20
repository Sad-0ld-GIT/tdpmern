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
    res.render("results.ejs", {"sname":"Shafeeq", "phy": 100, "chem": 80, "math": 110 })
    res.end()
})

server.get("/results/phil",function(req,res){
    res.render("results.ejs", {"sname":"Phil", "phy": 120, "chem": 140, "math": 90 })
    res.end()
})

server.get("/results/matt",function(req,res){
    res.render("results.ejs", {"sname":"Matt", "phy": 90, "chem": 75, "math": 80 })
    res.end()
})

server.listen(3000)