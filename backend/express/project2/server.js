let nbs = require("express")
let server = nbs()

server.set("view engine","ejs")

server.get("/",function(req,res){
    res.render("homepage.ejs")
    res.end()
})

server.get("/timestable/:number",function(req,res){
    res.render("range.ejs", {num:req.params.number})
    res.end()
})

server.get("/timestable/:number/:range",function(req,res){
    res.render("timestable.ejs", {num:req.params.number, range:req.params.range })
    res.end()
})

server.listen(3000)