const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.use("/",express.static(__dirname + "/"));
app.use("/",bodyParser.urlencoded({extended:false}));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/feedback.html") 

});

app.post("/", (request, response) => {
    //do stuff with the form object
    console.log(request.body);
    const string = JSON.stringify(request.body, null, 2);
    fs.readFile("data.json", 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
        const jsonParsed = JSON.parse(data);
        jsonParsed.feedback = [...jsonParsed.feedback,string];
        fs.writeFile("data.json", string, function(err) {
        if (err) {console.log(err);}
        });

        console.log(string);
    });
    response.redirect("/");
    });

    


console.log("Listening port 5200");
app.listen(5200);