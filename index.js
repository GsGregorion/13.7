var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/exit':
            case 'quit':
            case 'q':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case 'ver':
                console.log(process.env);
                break;
            case 'Papayas':
                process.stdout.write('Mangoes and papayas are very tasty :) This is my case test \n');
                break;
            case '/getOSinfo':
            case 'i':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\nCreate something different! \n');
                break;
        }
    }
});