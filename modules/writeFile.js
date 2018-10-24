var fs = require('fs');
var colors = require('colors');

function writeFile(message1, message2) {
    fs.writeFile('./tekst.txt', 'Zapis', function (err) {
        if (err) throw err;
        message1 = console.log('Zapisano!'.red);
        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
            message2 = console.log(data);
        });
    });

    return message1 + message2;
}

exports.print = writeFile;
