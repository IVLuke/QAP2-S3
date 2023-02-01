//QAP 2
//Authors: Written by: Peter Rawsthorne Edited by: Luke Jones
//Date submitted:

//Additions: 1. console.log on each switch case

const http = require("http");
const routes = require("./routes.js");

const server = http.createServer((request, response) => {
  let path = "./views/";
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      routes.indexPage(path, request.url, response);
      console.log("The index page is working");
      break;

    case "/about":
      path += "about.html";
      response.statusCode = 200;
      routes.aboutPage(path, request.url, response);
      console.log("The about page is working");
      break;
    case "/contact":
      path += "contact.html";
      response.statusCode = 200;
      routes.contactPage(path, request.url, response);
      console.log("The contact page is working");
      break;
    case "/subscribe":
      path += "subscribe.html";
      response.setHeader("Set-cookie", "subscription=New");
      routes.subscribePage(path, request.url, response);
      console.log("The subscribe page is working");
      break;
    case "/about-me":
      response.statusCode = 301;
      response.setHeader("Location", "/about");
      response.end();
      console.log("The about-me (lack of) page is working as intended");
      break;
    case "/synchronous":
      routes.synchronous("./files/", "sync file mgmt", response);
      console.log("The synchronous switch is working");
      break;
    case "/asynchronous":
      routes.asynchronous("./files/", "async file mgmt", response);
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      routes.fourOfourPage(path, request.url, response);
      console.log("The 404 page has been loaded");
      break;
  }
});

server.listen(3000, "localhost", () => {
  console.log("listening on port 3000.");
});
