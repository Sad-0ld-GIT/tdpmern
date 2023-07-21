let nbs = require("express")
let server = nbs()
let cookieparser = require("cookie-parser")

server.set("view engine","ejs")
server.use(cookieparser())

server.get("/",function(req,res){
    res.render("homepage.ejs")
    res.end()
})

server.get("/timestable/:number",function(req,res){
    res.cookie("num",req.params.number)
    res.render("range.ejs")
    res.end()
})

server.get("/selectRange/:number",function(req,res){
    res.cookie("range",req.params.number)
    res.render("confirmation.ejs")
    res.end()
})

server.get("/confirmation",function(req,res){
    let numTimes= req.cookies.num
    let numRange= req.cookies.range
    res.render("timestable.ejs", {num:numTimes, range:numRange})
    res.end()
})

server.listen(3000)