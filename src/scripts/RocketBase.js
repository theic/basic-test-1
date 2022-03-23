"use strict";
exports.__esModule = true;
exports.RocketBase = void 0;
var RocketBase = /** @class */ (function () {
    function RocketBase() {
    }
    RocketBase.prototype.launch = function () {
        var message = "The ".concat(this.name, " launched at ").concat(new Date().toLocaleString());
        console.log(message);
    };
    return RocketBase;
}());
exports.RocketBase = RocketBase;
