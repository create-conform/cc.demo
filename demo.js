//
// demo.js
//
// Library created to demonstrate pkx.
//

// module class that will be instantiated every time it is required
function Demo(pkx, module, configuration) {
    var self = this;

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
}
// module factory
define(function() {
    return new (Function.prototype.bind.apply(Demo, arguments));
});