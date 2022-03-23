"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StarPort_1 = require("./StarPort");
const launch = new StarPort_1.StarPort();
const rockets = launch.getAllRockets();
let index = 1;
for (const rocket of rockets) {
    const launchMessage = `Prepare to the next launch #${index++}: `;
    console.log(launchMessage);
    rocket.launch();
}
