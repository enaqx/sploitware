// Auxiliary functions and globals

// Define global __STACK__ for accessing stacktrace
Object.defineProperty(global, '__STACK__', {
    get: function() {
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack) {
            return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;
    }
});

// Define global __STACK__  for accessing current line
Object.defineProperty(global, '__LINE__', {
    get: function() {
        return __STACK__[1].getLineNumber();
    }
});

// Define global __FILE__ for accessing current filename
Object.defineProperty(global, '__FILE__', {
    get: function() {
        return __STACK__[1].getFileName().split('/').slice(-1)[0];
    }
});
