"use strict";
exports.__esModule = true;
var StarPort_1 = require("./StarPort");
var launch = new StarPort_1.StarPort();
var rockets = launch.getAllRockets();
var index = 1;
for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
    var rocket = rockets_1[_i];
    var launchMessage = "Prepare to the next launch #".concat(index++, ": ");
    console.log(launchMessage);
    rocket.launch();
}
