// Command Line Interface prototype
var cli = CLI.prototype;

// Expose Command Line Interface
exports = module.exports = cli;

// Initialize new Command Line Interface
function CLI() {
    if (!(this instanceof CLI)) return new CLI;
}

cli.help = function() {
    console.log("Help");
}
