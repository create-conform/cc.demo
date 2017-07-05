//
// demo.js
//
// Library created to demonstrate pkx.
//

// module class that will be instantiated every time it is required
function Demo(pkx, module, configuration) {
    var self = this;

    var io = require("cc.io/");

    console.log("Module Configuration: ", JSON.stringify(configuration, null, "  "));

    var embedded = require("cc.demo.embedded/");

    this.getVersion = function() {
        return pkx.version;
    };

    this.whoami = function() {
        return require("cc.demo/demo-data.json").whoami;
    };

    this.sayHelloTo = function(name) {
        console.log("Hello, " + name + "!");
    };

    console.log(self.whoami());
    console.log(embedded.whoami());

    console.log("CWD: " + io.URI.parse("./"));

    io.URI.open("package.json").then(function(stream) {
        stream.readAsJSON().then(console.log, console.error);
    }, console.error);
}
// module factory
define(function() {
    return new (Function.prototype.bind.apply(Demo, arguments));
});