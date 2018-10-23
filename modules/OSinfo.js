var os = require('os');
var colors = require('colors');
var timeDevider = require('./time_units');

// set theme
colors.setTheme({
    custom: ['trap']
  });

function getOSinfo() {
    var type = os.type(),
        release = os.release(),
        processor = os.cpus()[0].model,
        runningTime = os.uptime(),
        userInfo = os.userInfo();

    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type='Windows';
    }
        
    console.log(colors.red.underline('System:'), type, colors.cyan('\nRelease:'), release, colors.random('\nProcessor:'), processor);
    console.log(colors.zebra('Running time:'), timeDevider.print(runningTime));
    console.log(colors.custom('User name:'), userInfo.username, colors.grey('\nHome directory:'), userInfo.homedir);
}

exports.print = getOSinfo;