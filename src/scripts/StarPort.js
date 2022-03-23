"use strict";
exports.__esModule = true;
exports.StarPort = void 0;
var SpaceXRocket_1 = require("./SpaceXRocket");
var StarPort = /** @class */ (function () {
    function StarPort() {
    }
    StarPort.prototype.getAllRockets = function () {
        return [new SpaceXRocket_1.SpaceXRocket()];
    };
    return StarPort;
}());
exports.StarPort = StarPort;
