const fs = require("fs");

fs.readFile(process.argv[2], 'utf-8', function (error, data) {
    if (error) return error;

    console.log(data.split("\n").length - 1)
})