const express = require("express");
 
const app = express();

const urlencodedParser = express.urlencoded({extended: false});

const user = {
    login: "",
    password: "",
};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    user.login = request.body.login;
    user.password = request.body.password;
    // if(request.body.login === "admin" && request.body.password === "admin") {
    if (user.login === "admin" && user.password === "admin") {
        response.send("Hello admin!");
    }
    else {
        response.send("Sorry, you are not allowed to access this page")
    }
});

app.listen(4000);
