const fs = require("fs");
const path = require("path");

module.exports = function (directorio, extension, callback) {

fs.readdir(directorio, function (error, lista) {
    if (error) {
        return callback(error)
    }

    lista = lista.filter(function (file) {
        return path.extname(file) === "." + extension
    })
    callback(null, lista)
})
}