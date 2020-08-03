var express = require("express");
var app = express();

const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   // res.end('Hello World');
//   res.redirect('/');
// });

// const hostname = '127.0.0.1';

app.set("view engine", "ejs");




app.get("/", (req,res)=>{
	res.render("index");
})

http.createServer(app).listen(app.get('port'), function() {
  console.log('Application started on port %d', app.get('port'));
});