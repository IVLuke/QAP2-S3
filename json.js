const fs = require("fs");

fs.readFile("./files/user.json", "utf8", (err, jsondata) => {
  if (err) console.log(err);
  else {
    try {
      const user = JSON.parse(jsondata);
      console.log(user.firstname);
      console.log(user.lastname);
    } catch (err) {
      console.error("Error parsing json file", err);
    }
  }
  console.log("Read json data from disk...");
});
