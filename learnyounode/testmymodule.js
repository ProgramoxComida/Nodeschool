var mymod = require("./mymodule");
var directorio = process.argv[2]
var extension = process.argv[3]

mymod(directorio, extension, function (error, lista) {
    if (error) { return error; }

    lista.forEach(function (file) {
        console.log(file)
    })
})