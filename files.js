const fs = require("fs");

fs.readFile("./files/luke.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Read data from disk...");
  console.log(data);
});

console.log("Good Day!");

process.addListener("uncaughtException", (err) => {
  console.error(`There was an uncaught error ${err}`);
  process.exit(1);
});
