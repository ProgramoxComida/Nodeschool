const fs = require("fs");

var buffer = fs.readFileSync(process.argv[2])
var total = buffer.toString().split("\n").length - 1
console.log(total)