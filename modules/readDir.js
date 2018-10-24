var fs = require('fs');
var colors = require('colors');

function filesList(message1, message2) {
    fs.readdir('.', function (err, files) {
        message1 = console.log('To jest moja lista plików:'.red);
        message2 = console.log(files);
        writeFile(files);
    });
    return message1 + message2;
}

function writeFile(text) {
    fs.writeFile('./tekst.txt', text, function (err) {
        if (err) throw err;
        console.log('Zapisano!'.green);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            console.log(data);
        });
    });
}

exports.print = filesList;