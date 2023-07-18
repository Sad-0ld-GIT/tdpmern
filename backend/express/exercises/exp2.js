let nbs = require("express");
let server = nbs();

function qaFunction (request, response) {
    response.send("It is very hot today")
}

server.get("/nbs", function (request, response) {
    response.send("Hello my firends!")
})

server.get("/qa1", qaFunction);
server.get("/qa2", qaFunction)

server.listen(3000);