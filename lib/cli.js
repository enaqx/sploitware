// Command Line Interface

// Module dependencies
var optparse = require('optparse'); // cli option parsing
var helper = require('./helper'); // helper functions anf globals

// Command Line Interface prototype
var cli = CLI.prototype;

// Expose Command Line Interface
exports = module.exports = cli;

// Initialize new Command Line Interface
function CLI() {
    if (!(this instanceof CLI)) return new CLI;
}

// Command line options and new option parser
var switches = [
    ['-h', '--help', 'Shows help sections'],
    ['-f', '--file', 'Shows file name']
];
var parser = new optparse.OptionParser(switches);

parser.on('help', function() {
    console.log('Help');
});
parser.on('file', function() {
    console.log(__FILE__);
});
parser.parse(process.argv);
