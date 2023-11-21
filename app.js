
const express = require("express");
//use node
const https = require("https");
const bodyParser = require("body-parser");
const path = require('path')
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/public')));




//get local weather data using openweathermap API
app.get("/", function (req, res) {
  //send index.html over to the browser:
  res.sendFile(__dirname + "/index.html");
});


app.post("/", function (req, res) {

  const query = req.body.cityName;
  const apiKey = "bd2585d16e5dcdccc02d6000ed6fbb39";
  const unit = "metric";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;

  //https.get to get data from an external resource
  https.get(url, function (response) {
    // console.log(response);
    // console.log(response.statusCode);
    //response.on - to search for some data - the result will be shown in the terminal in Hexadecimal
    //we can use Cryptii website to convert it to text
    //parse json
    response.on("data", function (data) {
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



app.get('/user-page',(req,res)=>{
  res.sendFile(__dirname + "/user_page.html");
})
app.get('/my-favorite',(req,res)=>{
  res.sendFile(__dirname + "/my-favorite.html");
})


app.get("/login-signup", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});
app.get("/signuptonewsletter", function (req, res) {
  res.sendFile(__dirname + "/newssignup.html");
})

app.get("/items",(req, res) => {
  res.sendFile(__dirname + "/items.html");
})

app.post("/signupform", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  //create javascript object named data to store customer information:
  const data = {
    //check mailchimp API reference for the name of the fields such as members
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
          // merge_fields ALSO includes ADDRESS,BIRTHDAY,PHONE
        }
      }
    ]
  };
  //make data a string
  const jsonData = JSON.stringify(data);


  const mailchimpUrl = "https://us11.api.mailchimp.com/3.0/lists/be04038ca5"; //be04038ca5 is the list id
  //us11 is the last part of API key
  

  const options = {
    method: "POST",
    auth: "yichen1128:544c1d8f2118b62aed7a9bb1e027661b-us11" //yichen1128 是随便起的user name然后冒号后边是api key
    //new API key: 544c1d8f2118b62aed7a9bb1e027661b-us11
//old API KEY:ca0deb8323da62f3bd39ee29e15a6863-us11
  };

  //use https.request to post data to an external resource
  //note:https.get is to get data from an external resource
  const request = https.request(mailchimpUrl, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }


    //get the data that got sent back:
    response.on("data", function (data) {
      console.log(JSON.parse(data));
      process.stdout.write(data)
    })

    response.on("error", function (e) {
      console.error(e)
    })
  });

  request.write(jsonData);
  request.end();
});

//if anything goes wrong, let the user try again by redirecting the page from "/failure" to the home page "/"
app.post("/failure", function (req, res) {
  res.redirect("/signuptonewsletter")
});

//use Heroku
//process.env.PORT - a dynamic port by heroku; or (||) local port 3000
//we need to create a file called Procfile (touch Procfile)
//then in the file, type in -   web: node app.js
//- this is to tell heroku how to open the file and which file contains the server code
//then in Hyper -
//initialize git repository by type in: git init
//then type git add .
//then type git commit -m "First Commit"
//then heroku create
//then git push heroku master
//we get: https://abracadabrant-saucisson-76924.herokuapp.com/
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});





