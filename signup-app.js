const express = require("express");

const request = require("request");

const bodyParser = require("body-parser");

const https = require("https");

const app = express();

//make local css file and image file accessible online
app.use(express.static("public"));
//then create a folder under Newsletter-Signup folder, name it public
//then under public folder - create a folder named css -
//then drag styles.css file and the image file  into the css folder

//body parser
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/newssignup.html");
});



app.post("/",function(req,res){
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

//create javascript object:
  const data = {
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME:firstName,
          LNAME:lastName
        }
      }
    ]
  };
  const jsonData = JSON.stringify(data);


  const url = process.env.MAILCHIMP_URL; //be.....ca5 is the list id
 

  const options = {
    method: "POST",
    auth: process.env.SIGN_UP_API_KEY

  };

  const request = https.request(url, options, function(response){
    if(response.statusCode === 200){
      res.sendFile(__dirname + "/success.html");
    }else{
      res.sendFile(__dirname + "/failure.html");
    }


    //get the data that got sent back:
    response.on("data",function(data){
    // console.log(JSON.parse(data));

    })
  });

  request.write(jsonData);
  request.end();
});

//if anything goes wrong, let the user try again by redirecting the page from "/failure" to the home page "/"
app.post("/failure",function(req,res){
  res.redirect("/")
});

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
app.listen(process.env.PORT || 3000,function(){
  console.log("Server is running on port 3000");
});



/*
use bootstrap (go to the example section) to get the signup form html file
find & open the sign-in example - right click - view page source - copy&paste
the source code into signup.html
then find bootstrap CDN online - copy the link and replace the link for the link in the signup html
*the signin form example copied from bootstrap has a customized css, after we right click and get the
source code, we can then click on the link named signin.css to find the css code
then in the signup.html file we created, we need to replace the current signin.css with styles.css,
which is the css file that we created

*/
