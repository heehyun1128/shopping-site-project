
const express = require("express");
//use node
const https = require("https");
const bodyParser = require("body-parser");
const path = require('path')

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, '/public')));



app.get("/",function(req,res){
  //send index.html over to the browser:
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req,res){

  const query = req.body.cityName;
  const apiKey = "bd2585d16e5dcdccc02d6000ed6fbb39";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

  https.get(url,function(response){
    // console.log(response);
    // console.log(response.statusCode);
    //response.on - to search for some data - the result will be shown in the terminal in Hexadecimal
    //we can use Cryptii website to convert it to text
    //parse json
    response.on("data", function(data){
      //get data in the format of javascript object:
      const weatherData = JSON.parse(data)
      //console.log(weatherData);
      //turn object into a string - opposite than making data into object
        // const object = {
        //   name: "Yi"
        // }
        // console.log(JSON.stringify(object));
      //retrieve a particular piece of data
      const temp = weatherData.main.temp
      //console.log(temp);

      const weatherDescription = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon

      //we can have multiple res.write but only one res.send
      res.write("<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>");
      res.write("<p>The westher is currently " + weatherDescription + "</p>");
      //display image
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<img src=" + imageURL + ">")
      res.send();
    })
  })
})

app.listen(3000,function(){
  console.log("Server is running on port 3000.")
}) //in Hyper,type nodemon app.js to run this js file;
