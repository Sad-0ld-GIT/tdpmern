let nbs = require("express");
let server = nbs();

function homePage (req, res) {
    res.write("<h1> <center> Wlcome to my homepage </center> </h1>")
    res.write("<b> List of departments </b> <br>")
    res.write("<a href='http://127.0.0.1:3000/department/101'> Human Resource Department </a> <br>")
    res.write("<a href='http://127.0.0.1:3000/department/102'> Information Technology Department </a> <br>")
    res.write("<a href='http://127.0.0.1:3000/department/103'> Sales Department </a> <br>")
}

function employeesList (req, res) {
    let departmentName = ""
    if (req.params.dept == 101) {
        departmentName = "Human Resource Department"
    }
    if (req.params.dept == 102) {
        departmentName = "Information Technology Department"
    }
    if (req.params.dept == 103) {
        departmentName = "Sales Department"
    }
    res.write("<h1> <center>")
    res.write(departmentName)
    res.write("</h1> </center>")
}

server.get("/", homePage);
server.get("/department/:dept", employeesList)

server.listen(3000);